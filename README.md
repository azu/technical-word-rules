# technical-word-rules [![Build Status](https://travis-ci.org/azu/technical-word-rules.svg?branch=master)](https://travis-ci.org/azu/technical-word-rules)

[WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 " WEB+DB PRESS用語統一ルール secret")をベースに、
JavaScript関係やJSer.infoで使用する技術用語などのWZEditor形式の辞書ファイルとコンパイル済みJSONです。

- [azu/wzeditor-word-rules-parser](https://github.com/azu/wzeditor-word-rules-parser "azu/wzeditor-word-rules-parser")
- [azu/codemirror-spellckecker](https://github.com/azu/codemirror-spellckecker "azu/codemirror-spellckecker")

などと一緒に使うことを目的にしています。

[textlint](https://github.com/azu/textlint)から使う場合は以下のルールを使うことで利用できます。

- [azu/textlint-rule-spellcheck-tech-word](https://github.com/azu/textlint-rule-spellcheck-tech-word "azu/textlint-rule-spellcheck-tech-word")

## 辞書の書式

詳しくは [こちら](https://github.com/azu/wzeditor-word-rules-parser/blob/master/doc/wzeditor-rule.md "wzeditor-word-rules-parser/wzeditor-rule.md at master · azu/wzeditor-word-rules-parser")を参考にして下さい。

```
# WZEditorの用語統一辞書
# タブ区切り、#開始はコメント
表記単語    指定単語    前置文字,後置文字,オプション
```

[EditorConfig](http://editorconfig.org/ "EditorConfig") の設定が用意されているので、
対応しているエディタか[Browser extension: EditorConfig for GitHub](http://rreverser.com/gh-github-editorconfig/ "Browser extension: EditorConfig for GitHub")を利用すると編集が楽になります。

## API

以下のURLから全ての辞書を結合したJSONファイルを取得出来ます

- http://azu.github.io/technical-word-rules/all.json

## Installation

```
npm install azu/technical-word-rules
```


```js
var json = require("technical-word-rules");
// -> all.jsonが取得できる
```

## Usage

以下の記事で解説しています。

- [textlintで日本語の文章をチェックする | Web Scratch](http://efcl.info/2015/09/10/introduce-textlint/ "textlintで日本語の文章をチェックする | Web Scratch")


## 関連

-  [azu/codemirror-spellckecker](https://github.com/azu/codemirror-spellckecker "azu/codemirror-spellckecker") でスペルチェック + QuickFixの辞書として利用しています。
- [azu/textlint-rule-spellcheck-tech-word](https://github.com/azu/textlint-rule-spellcheck-tech-word "azu/textlint-rule-spellcheck-tech-word") この辞書を使ったtextlintルール

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
