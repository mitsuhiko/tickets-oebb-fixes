// ==UserScript==
// @name         Fix OeBB's Terrible Store
// @namespace    http://lucumr.pocoo.org/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tickets.oebb.at/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var body = document.getElementsByTagName('body')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        *, *:after {
            box-shadow: none!important;
            -webkit-box-shadow: none!important;
        }
        .background.blur, .background {
            /*background: #747c7f!important;*/
            filter: none!important;
            -webkit-filter: none!important;
        }
        .background :first-child {
            display: none!important;
        }
    `;
    body.appendChild(style);

    // Your code here...
})();
