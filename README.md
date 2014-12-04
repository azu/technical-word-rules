# technical-word-rules [![Build Status](https://travis-ci.org/azu/technical-word-rules.svg?branch=master)](https://travis-ci.org/azu/technical-word-rules)

[WEB+DB PRESS用語統一ルール](https://gist.github.com/inao/f55e8232e150aee918b9 " WEB+DB PRESS用語統一ルール secret")をベースに、
JavaScript関係やJSer.infoで使用する技術用語などのWZEditor形式の辞書ファイルとコンパイル済みJSONです。

- [azu/wzeditor-word-rules-parser](https://github.com/azu/wzeditor-word-rules-parser "azu/wzeditor-word-rules-parser")
- [azu/codemirror-spellckecker](https://github.com/azu/codemirror-spellckecker "azu/codemirror-spellckecker")

などと一緒に使うことを目的にしています。

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

 [azu/codemirror-spellckecker](https://github.com/azu/codemirror-spellckecker "azu/codemirror-spellckecker") でスペルチェック + QuickFixの辞書として利用しています。

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT