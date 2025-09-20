"use strict";   

const bgPreview = document.querySelector(".js-bg-preview");

const bgGrey = document.querySelector(".js-color-grey");
const bgOrange = document.querySelector(".js-color-orange");
const bgGreen = document.querySelector(".js-color-green");

bgGrey.addEventListener("change", (event) => {
    formData.field1 = parseInt(event.target.value);
    bgPreview.classList.add("bg-grey");
    bgPreview.classList.remove("bg-orange");
    bgPreview.classList.remove("bg-green");
});
bgOrange.addEventListener("change", (event) => {
    formData.field1 = parseInt(event.target.value);
    bgPreview.classList.remove("bg-grey");
    bgPreview.classList.add("bg-orange");
    bgPreview.classList.remove("bg-green");
});
bgGreen.addEventListener("change", (event) => {
    formData.field1 = parseInt(event.target.value);
    bgPreview.classList.remove("bg-grey");
    bgPreview.classList.remove("bg-orange");
    bgPreview.classList.add("bg-green");
});
