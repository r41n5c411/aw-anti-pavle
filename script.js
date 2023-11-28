// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Try to get rid of currupt staff
// @author       Focused Something
// @match        https://atwar-game.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atwar-game.com
// @grant        none
// ==/UserScript==




function banUserList() {
    'use strict';
    // exact name of the players you wish to ban
    const NAME_LIST = ['Pavle']



    document.querySelector("#chat_expanded_inner").childNodes.forEach((node) => {
        node.childNodes.forEach((childNode) => validate(node, childNode));
    });

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                node.childNodes.forEach((child) => validate(node, child));
            });
        });
    });

    function validate(parent, child) {
        if (
            child.nodeName === "A" &&
            child.textContent &&
            NAME_LIST.some((n) => child.textContent.includes(n))
        ) {
            parent.style.display = "none";
        }
    }

    observer.observe(document.querySelector("#chat_expanded_inner"), {
        childList: true,
    });
}

window.addEventListener('load', banUserList, false);
