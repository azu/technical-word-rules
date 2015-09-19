---
title: 'Deku: How we built our functional alternative to React'
author: azu
layout: post
itemUrl: 'https://segment.com/blog/deku-our-functional-alternative-to-react/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/05/index.json'
date: '2015-05-12T06:57:01+00:00'
tags:
  - JavaScript
  - DOM
  - UI
  - library
relatedLinks:
  - title: segmentio/deku
    url: 'https://github.com/segmentio/deku'
---
Virtual DOMを持ち、Reactのようなライフサイクルを持つコンポーネントライブラリ。
ES6 Classesではなくライフサイクルに対応する関数をexportする形式となっていて`this`を気にせず書くことができる。
Babelのオプションを使いJSXで書くこともでき、Node.js上でも動作するためサーバサイドレンダリングが行える。
ファイルサイズが10kb程度。
