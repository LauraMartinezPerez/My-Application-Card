"use strict";

const collapsableTitle = document.querySelectorAll(".title");

const designCollapsable = document.querySelector(".js_design_collapsable"); 
const fillCollapsable = document.querySelector(".js_fill_collapsable");
const shareCollapsable = document.querySelector(".js_share_collapsable");



const showFormDesign = () => {
    designCollapsable.classList.toggle("collapsed");
    fillCollapsable.classList.add("collapsed");
    shareCollapsable.classList.add("collapsed");
};
const showFormFill = () => {
    designCollapsable.classList.add("collapsed");
    fillCollapsable.classList.toggle("collapsed");
    shareCollapsable.classList.add("collapsed");
};
const showFormShare = () => {
    designCollapsable.classList.add("collapsed");
    fillCollapsable.classList.add("collapsed");
    shareCollapsable.classList.toggle("collapsed");
};

const handleclick = (event) => {
    const clicked = event.currentTarget;
    if (clicked.classList.contains("js_design_title")) { 
        showFormDesign();
    } else if (clicked.classList.contains("js_fill_title")) {
        showFormFill();
    } else if (clicked.classList.contains("js_share_title")) {
        showFormShare();
    }
}

for (const titles of collapsableTitle) {
    titles.addEventListener("click", handleclick);}
