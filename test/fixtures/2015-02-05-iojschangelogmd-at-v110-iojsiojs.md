---
title: io.js/CHANGELOG.md at v1.1.0 · iojs/io.js
author: azu
layout: post
itemUrl: 'https://github.com/iojs/io.js/blob/v1.1.0/CHANGELOG.md'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/02/index.json'
date: '2015-02-05T15:22:48+00:00'
tags:
  - node.js
  - ReleaseNote
relatedLinks:
  - title: 'DailyJS | Node 0.11.16 と io.js 1.1.0 がリリース | JSお散歩'
    url: 'http://panda.node.ws/?p=2152'
  - title: 'assert: use util.inspect() to create error messages by cjihrig · Pull Request #668 · iojs/io.js'
    url: 'https://github.com/iojs/io.js/pull/668'
  - title: iojs-jp/2015-02-06.md at master · iojs/iojs-jp
    url: 'https://github.com/iojs/iojs-jp/blob/master/weekly/2015-02-06.md'
---
io.js 1.1.0リリース。
cryptoのパフォーマンス改善、エラーメッセージを作るときに`JSON.stringify()`だと循環参照でエラーとなるため、`util.inspect()`を使うように変更された
