"use strict";

const designCollapsable = document.querySelector(".js_design_collapsable"); 

const fillCollapsable = document.querySelector(".js_fill_collapsable");

const shareCollapsable = document.querySelector(".js_share_collapsable");

const collapsableHeaders = document.querySelectorAll(".js_collapsable_header");


const handleClickColallapsable = (event) => {
    
       if (event.currentTarget.classList.contains("js_design_title")) {
        designCollapsable.classList.toggle("collapsed");
        fillCollapsable.classList.add("collapsed");
        shareCollapsable.classList.add("collapsed");
    }
    if (event.currentTarget.classList.contains("js_fill_title")) {
        designCollapsable.classList.add("collapsed");
        fillCollapsable.classList.toggle("collapsed");
        shareCollapsable.classList.add("collapsed");
    }
    if (event.currentTarget.classList.contains("js_share_title")) {
        designCollapsable.classList.add("collapsed");
        fillCollapsable.classList.add("collapsed");
        shareCollapsable.classList.toggle("collapsed");
    } 
}

for (const collapsableHeader of collapsableHeaders) {
    collapsableHeader.addEventListener("click", handleClickColallapsable);
}


