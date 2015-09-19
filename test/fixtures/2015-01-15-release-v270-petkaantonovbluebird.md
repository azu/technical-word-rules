---
title: Release v2.7.0 · petkaantonov/bluebird
author: azu
layout: post
itemUrl: 'https://github.com/petkaantonov/bluebird/releases/tag/v2.7.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/01/index.json'
date: '2015-01-15T21:17:07+00:00'
tags:
  - Promises
  - library
  - ReleaseNote
relatedLinks:
  - title: Promise unhandled rejection tracking global handler hook
    url: 'https://gist.github.com/benjamingr/0237932cee84712951a2'
  - title: '[whatwg] An API for unhandled promise rejections from Domenic Denicola on 2014-09-12 (public-whatwg-archive@w3.org from September 2014)'
    url: 'http://lists.w3.org/Archives/Public/public-whatwg-archive/2014Sep/0024.html'
---
bluebird 2.7.0リリース。
`process.on("unhandledRejection", fn)` という感じでグローバルにunhandled Rejectionをキャッチ出来るイベントを登録できるように。
