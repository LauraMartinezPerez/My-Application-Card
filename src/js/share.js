"use strict";

// Selecciona elementos del DOM
const shareIcons = document.querySelector(".js-share-icons"); 

const collapsableHeaderShare = document.querySelectorAll(".js_collapsable_header");
const shareCollapsable = document.querySelector(".js_share_collapsable");


function handleClick() {
    console.log("click");
    /* shareCollapsable.classList.toggle("collapsed"); */
}


for (const collapsableHeaderShares of collapsableHeaderShare) {
    collapsableHeaderShares.addEventListener("click", handleClick);
}