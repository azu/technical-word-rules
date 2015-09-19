---
title: 'eval ソースをデバッグする - 開発ツール | MDN'
author: azu
layout: post
itemUrl: 'https://developer.mozilla.org/ja/docs/Tools/Debugger/How_to/Debug_eval_sources'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/04/index.json'
date: '2015-04-14T02:43:03+00:00'
tags:
  - firefox
  - sourcemap
  - debug
---
FirefoxやChromeの開発者ツールはevalやnew Function経由で実行されるコードに//# sourceURL=my-foo.js のような識別子があると通常のスクリプトと同等に扱えるので、ブレークポイントなどが可能になる。
