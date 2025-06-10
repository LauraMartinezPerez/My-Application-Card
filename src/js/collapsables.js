"use strict";

const collapsableDesign = document.querySelector(".js_design_title");
const collapsableFill = document.querySelector(".js_fill_title");
const collapsableShare = document.querySelector(".js_share_title");

const designCollapsable = document.querySelector(".js_design_collapsable"); 

const fillCollapsable = document.querySelector(".js_fill_collapsable");

const shareCollapsable = document.querySelector(".js_share_collapsable");

/* 
1. hacer funciones para que se quite la class hidden del formulario y se aplique al resto de form
2. hacer evento para que al hacer clic en el titulo se apliquen las funciones
*/

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

collapsableDesign.addEventListener("click", () => {
    showFormDesign();
});
collapsableFill.addEventListener("click", () => {
    showFormFill();
});
collapsableShare.addEventListener("click", () => {
    showFormShare();
});

/*Refactorizacion
1. Cuando se hace clic en el titulo: