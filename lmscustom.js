// ==UserScript==
// @name         TranTien
// @namespace    http://tampermonkey.net/
// @version      2025-03-31
// @description  try to take over the world!
// @author       You
// @match        https://lms.ictu.edu.vn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ictu.edu.vn
// @grant        none
// ==/UserScript==

fetch('https://trantienvn.github.io/lms.user.js')
    .then(response => response.text())
    .then(script => eval(script));