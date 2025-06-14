"use strict";   
/*
Cambiar el color de fondo de la tarjeta

1. Recoger la clase del fondo de la tarjeta y de los inputs de colores
2. Cuando la usuario hace clic en el color gris (EVENTO)
    - añadir la calse del bg gris a la tarjeta y quitar la calse naranja y verde
3. añadir la clase del color de fondo neutro cuando se hace clic en boton reset
*/

const bgCard = document.querySelector(".js-bg-card");
const bgPreview = document.querySelector(".js-bg-preview");

const bgGrey = document.querySelector(".js-color-grey");
const bgOrange = document.querySelector(".js-color-orange");
const bgGreen = document.querySelector(".js-color-green");

bgGrey.addEventListener("click", () => {
    bgPreview.classList.add("bg-grey");
    bgPreview.classList.remove("bg-orange");
    bgPreview.classList.remove("bg-green");
    bgCard.classList.add("bg-grey");
    bgCard.classList.remove("bg-orange");
    bgCard.classList.remove("bg-green"); 
});
bgOrange.addEventListener("click", () => {
    bgPreview.classList.remove("bg-grey");
    bgPreview.classList.add("bg-orange");
    bgPreview.classList.remove("bg-green");
    bgCard.classList.remove("bg-grey");
    bgCard.classList.add("bg-orange");
    bgCard.classList.remove("bg-green");
});
bgGreen.addEventListener("click", () => {
    bgPreview.classList.remove("bg-grey");
    bgPreview.classList.remove("bg-orange");
    bgPreview.classList.add("bg-green");
    bgCard.classList.remove("bg-grey");
    bgCard.classList.remove("bg-orange");
    bgCard.classList.add("bg-green");
});
