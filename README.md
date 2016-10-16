# technical-word-rules [![Build Status](https://travis-ci.org/azu/technical-word-rules.svg?branch=master)](https://travis-ci.org/azu/technical-word-rules)

[WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 " WEB+DB PRESS用語統一ルール secret")をベースに、
JavaScript関係や[JSer.info](http://jser.info)で使用する技術用語などの表記揺れ補正辞書とコンパイル済みJSONです。

[textlint](https://github.com/azu/textlint)から使う場合は以下のルールを使うことで利用できます。

- [azu/textlint-rule-spellcheck-tech-word](https://github.com/azu/textlint-rule-spellcheck-tech-word "azu/textlint-rule-spellcheck-tech-word")

CodeMirrorで利用する場合は以下のライブラリから利用できます。

- [azu/codemirror-spellckecker](https://github.com/azu/codemirror-spellckecker "azu/codemirror-spellckecker")

## 辞書

辞書データは[azu/prh.yml: A collection of prh.yml](https://github.com/azu/prh.yml "azu/prh.yml: A collection of prh.yml")で管理しています。

このリポジトリはコンパイル済みのJSONデータのみを管理しています。

## API

以下のURLから全ての辞書を結合したJSONファイルを取得出来ます

- http://azu.github.io/technical-word-rules/all.json

## Installation

```
npm install technical-word-rules
```


```js
var json = require("technical-word-rules");
// -> all.jsonが取得できる
```

## Usage

以下の記事で解説しています。

- [textlintで日本語の文章をチェックする | Web Scratch](http://efcl.info/2015/09/10/introduce-textlint/ "textlintで日本語の文章をチェックする | Web Scratch")
- [textlint + prhで表記ゆれを検出する | Web Scratch](http://efcl.info/2015/09/14/textlint-rule-prh/ "textlint + prhで表記ゆれを検出する | Web Scratch")

## 関連

- [azu/textlint-rule-web-plus-db](https://github.com/azu/textlint-rule-web-plus-db "azu/textlint-rule-web-plus-db")

[WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 " WEB+DB PRESS用語統一ルール secret")をより厳密に従いたい場合はこちらを利用してください。


## Testing


    npm test

既存のルールでパス済みのJSer.infoの記事に対してテストが実行されます。
記事がおかしい場合は[test/fixtures](test/fixtures)も併せて修正します。

## semantic-release

This module is released by [semantic-release/semantic-release](https://github.com/semantic-release/semantic-release "semantic-release/semantic-release").

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
