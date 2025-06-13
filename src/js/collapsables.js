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

/* Refactorizacion
1Cuando se hace clic en el titulo:
    - se abre ese form y se cierran los otros:

1. crear las funciones para abrir y cerrar los form
2. crear la funcion handleclick para cuando se haga clic en el titulo:
    -si el titulo contiene la clase js_XXXX_title, llamar a la funcion XXXX, si no, si el titulo contiene la clase js_XXXX_title, llamar a la funcion XXXX, si no, si el titulo contiene la clase js_XXXX_title, llamar a la funcion XXXX
3. Crear el evento para que cuando se haga clic el un titulo se aplique la funcion handleclick
*/


/* const collapsableTitle = document.querySelectorAll(".title"); */
/* const handleclick = (event) => {
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
    titles.addEventListener("click", handleclick);} */