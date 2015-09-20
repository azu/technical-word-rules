---
title: Do not Measure the Weather
author: azu
layout: post
itemUrl: 'http://mrale.ph/talks/goto2015/#/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/05/index.json'
date: '2015-05-17T13:27:05+00:00'
tags:
  - JavaScript
  - performance
  - スライド
relatedLinks:
  - title: 'V8の最適化とIRHydraでの可視化とベンチマークについてのメモ | Web Scratch'
    url: 'http://efcl.info/2014/09/13/v8-optimization-memo/'
  - title: IRHydra2
    url: 'http://mrale.ph/irhydra/2/'
---
計測と最適化の問題についてのスライド。
JSエンジンはJITコンパイルするため計測結果は未最適化+最適化になる。場合によっては計測対象がdead codeとなり最適化によって消えているかもしれないのを実際にIRHydra2を使って検証する話
