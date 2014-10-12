"use strict";
var gulp = require("gulp");
var source = require('vinyl-source-stream');
var fs = require("fs");
var concat = require('gulp-concat');
var lineParseStream = require("wzeditor-word-rules-parser").lineParseStream;
var JSONStream = require('JSONStream');
var es = require("event-stream");
gulp.task("build", function () {
    var writeStream = fs.createWriteStream('./all.json');
    return gulp.src("dict/*.txt")
        .pipe(concat("all.txt"))
        // -> gulp -> file stream
        .pipe(es.map(function (vinyl, cb) {
            cb(null, vinyl.contents);
        }))
        .pipe(es.split("\n"))
        .pipe(lineParseStream())
        .pipe(JSONStream.stringify())
        .pipe(writeStream);
});
gulp.task('default', ['build']);