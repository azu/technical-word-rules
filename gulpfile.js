"use strict";
var gulp = require("gulp");
var path = require("path");
var fs = require("fs");
var concat = require('gulp-concat');
var parser = require("wzeditor-word-rules-parser");
var es = require("event-stream");
var prh = require("prh");

gulp.task("build", function (taskCallback) {
    var allContents = [];
    gulp.src("dict/*.yml")
        .pipe(es.map(function (file, cb) {
            var config = prh.fromYAMLFilePath(file.path);
            var results = config.rules.map(function (rule) {
                var result = {
                    "pattern": rule.pattern.source,
                    "expected": rule.expected
                };
                //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags
                var flag = rule.pattern.flags || rule.pattern.toString().match(/[gimuy]*$/)[0];
                if (flag != null) {
                    var compressFlag = flag.replace(/[gm]*/g, "");
                    if (compressFlag) {
                        result["flag"] = compressFlag;
                    }
                }
                return result;
            });
            allContents = allContents.concat(results);
            cb(null, results);
        }))
        .on("end", function () {
            fs.writeFile("all.json", JSON.stringify(allContents), taskCallback);
        });
});
// txt => prh.ymlへの変換
gulp.task("yml", function () {
    function flatten(array) {
        return Array.prototype.concat.apply([], array);
    }

    return gulp.src("old_dict/*.txt")
        .pipe(es.map(function (file, cb) {
            try {
                var lines = String(file.contents).split("\n");
                var reg = flatten(lines.map(function (line) {
                    var raw = parser.rawLineParse(line);
                    var obj = parser.lineParse(line);
                    if (obj == null) {
                        return;
                    }
                    if (Array.isArray(obj)) {
                        return obj.map(function (item) {
                            item.commentField = raw.commentField;
                            item.hasRegExpOption = raw.hasRegExpOption;
                            return item;
                        });
                    } else {
                        obj.commentField = raw.commentField;
                        obj.hasRegExpOption = raw.hasRegExpOption;
                    }
                    return obj;
                })).filter(function (res) {
                    return res != null
                }).map(function (obj) {
                    var containRegExp = obj.hasRegExpOption ||
                        obj.flag != null ||
                        obj.pattern.indexOf("|") !== -1 ||
                        obj.pattern.indexOf("\\") !== -1 ||
                        obj.expected.indexOf("$") !== -1;
                    if (containRegExp) {
                        obj.pattern = new RegExp(obj.pattern, obj.flag);
                    }
                    if (/[!?]/.test(obj.expected)) {
                        obj.expected = '"' + obj.expected + '"';
                    }
                    return obj;
                });

                var output = reg.map(function (obj) {
                    var item = "  - expected: " + obj.expected + "\n"
                        + "    pattern: " + obj.pattern + "\n";
                    if (obj.commentField) {
                        item = "  # " + obj.commentField + "\n" + item;
                    }
                    return item;
                }).join("\n");
                var ruleContent = "version: 1\nrules:\n" + output;
                var fileName = path.basename(file.path, ".txt") + ".yml";
                fs.writeFile(path.join(__dirname, "dict", fileName), ruleContent, cb);
            } catch (e) {
                cb(e);
            }
        }))
});

gulp.task("old_build", function () {
    return gulp.src("old_dict/*.txt")
        .pipe(concat("all.txt"))
        // -> gulp -> file stream
        .pipe(es.map(function (file, cb) {
            try {
                var result = parse(String(file.contents));
                fs.writeFile("./all.json", JSON.stringify(result), cb);
            } catch (e) {
                cb(e);
            }
        }))
});
gulp.task('default', ['build']);