---
title: Introducing Incremental DOM — Google Developers — Medium
author: azu
layout: post
itemUrl: 'https://medium.com/google-developers/introducing-incremental-dom-e98f79ce2c5f'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/07/index.json'
date: '2015-07-10T07:20:34+00:00'
tags:
  - JavaScript
  - DOM
  - library
  - VirtualDOM
relatedLinks:
  - title: Incremental DOM ざっと見たやつ
    url: 'https://gist.github.com/azu/8f1afa948eeb2da3ad00'
---
メモリ使用量とテンプレートエンジンでは扱える閉じタグの無い要素などがモチベーションとなってるGoogle製のDOMライブラリ(WIP)。
Virtual DOMみたいに全体のTree構造を持たないことで余計なオブジェクトを作らないようにして、1passで走査することでメモリ効率を上げている。
