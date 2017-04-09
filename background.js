
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://www.aliexpress.com/item/' },

          }),
           new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://ru.aliexpress.com/item/' },

          }),
           new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://es.aliexpress.com/item/' },

          }),
           new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://pt.aliexpress.com/item/' },

          }),
           new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://fr.aliexpress.com/item/' },

          }),
           new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://www.aliexpress.com/store/product/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://ru.aliexpress.com/store/product/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://es.aliexpress.com/store/product/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://pt.aliexpress.com/store/product/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://fr.aliexpress.com/store/product/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://www.aliexpress.com/category/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://ru.aliexpress.com/category/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://es.aliexpress.com/category/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://pt.aliexpress.com/category/' },

          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'https://fr.aliexpress.com/category/' },

          }),
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});


var reponsetitle;
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.method == 'setTitle')
    reponsetitle = message.title;
    sendResponse(reponsetitle);
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.method == 'setDATA')
    reponsetitle = message.title;
    sendResponse(reponsetitle);
});


