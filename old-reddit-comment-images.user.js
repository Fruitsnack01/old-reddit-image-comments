// ==UserScript==
// @name         Old Reddit Image Comments
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Displays images in comments on the old Reddit website
// @author       fruitsnack01
// @match        *://www.reddit.com/*
// @match        *://old.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const link = document.querySelectorAll('a');

    link.forEach((element) => {
        if (element.innerHTML == '&lt;image&gt;'){
            const img = document.createElement('img');
            img.src = element.href;
            img.style.width = '240px';
            img.style.maxWidth = '100%';
            element.replaceWith(img);

            img.addEventListener('mouseover', function() {
                img.style.cursor = 'pointer';
            });

            img.addEventListener('click', function() {
                const img_src = img.src;
                window.open(img_src, '_blank');
            });
        }
    });
})();
