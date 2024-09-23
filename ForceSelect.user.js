// ==UserScript==
// @name         Force Select
// @homepage     https://github.com/ghoulatsch
// @namespace    https://superuser.com/questions/1282718/how-do-websites-block-selecting-text-and-how-do-i-unblock-that/
// @version      1.0
// @description  Stop sites from disabling text selection.
// @author       see namespace
// @match        *://m.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  let style = document.createElement('style');
  style.innerHTML = '*{ user-select: auto !important; }';

  document.body.appendChild(style);
})();
