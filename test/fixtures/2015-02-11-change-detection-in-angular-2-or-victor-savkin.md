---
title: 'Change Detection in Angular 2 | Victor Savkin'
author: azu
layout: post
itemUrl: 'http://victorsavkin.com/post/110170125256/change-detection-in-angular-2'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/02/index.json'
date: '2015-02-11T12:29:14+00:00'
tags:
  - AngularJS
  - アルゴリズム
relatedLinks:
  - title: リアルな DOM はなぜ遅いのか - steps to phantasien
    url: 'http://steps.dodgson.org/b/2014/12/11/why-is-real-dom-slow/'
---
Angular 2の変更検知の仕組みについての解説。
基本的にはComponentツリーを上から走査して変更を検知するが、Reactの`shouldComponentUpdate()`のように子への探索を減らす仕組みが導入されている
