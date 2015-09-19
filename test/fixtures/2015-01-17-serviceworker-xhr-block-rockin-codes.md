---
title: ServiceWorker を使った XHR のモックテスト - Block Rockin’ Codes
author: azu
layout: post
itemUrl: 'http://jxck.hatenablog.com/entry/response-injection'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/01/index.json'
date: '2015-01-17T07:21:14+00:00'
tags:
  - JavaScript
  - ServiceWorker
---
ServiceWorkerを使ったXHRのモック。
`onfetch`に登録すれば、XHR等のリクエストに対してhookができるので、事前に定義しておいたレスポンスを返すようにする。
ServiceWorkerの登録プロセスについて
