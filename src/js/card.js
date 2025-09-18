"use strict";

/*
Recoger el id de la tarjeta del url de la pagina
Hacer una peticion al servidor (para obtener los datos de la tarjeta) id de la tarjeta
    - guardo los datos de la tarjerta (en el localStorage)
    - introduzco esos datos en el html de la tarjeta
*/
const photoCard = document.querySelector(".js__profile-preview");
const nameCard = document.querySelector(".js_preview_profileName");
const cityCard = document.querySelector(".js_preview_city");
const emailCard = document.querySelector(".js_preview_email");
const trainingCard = document.querySelector(".js_preview_training");
const skillsCard = document.querySelector(".js_preview_skills");
const motivationCard = document.querySelector(".js_preview_motivation");
const technologiesCard = document.querySelector(".js_preview_technologies");
const linkedinCard = document.querySelector(".js_preview_linkedin");
const bgPreview = document.querySelector(".js-bg-preview");


//Obtener el id de la url
const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");
console.log(id);

fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log("esto es data de GET",data);
        const targetData = data.data;
        nameCard.innerText = targetData.field2;
        cityCard.innerText = targetData.field3;
        emailCard.innerText = targetData.field4;
        trainingCard.innerText = targetData.field5;
        skillsCard.innerText = targetData.field6;
        technologiesCard.innerText = targetData.field7;
        linkedinCard.innerText = targetData.field8;
        motivationCard.innerText = targetData.field9;
        photoCard.src = targetData.photo;

        if (targetData.field1 === 1) {
            bgPreview.classList.add("bg-grey");
            bgPreview.classList.remove("bg-orange");
            bgPreview.classList.remove("bg-green");

        } else if (targetData.field1 === 2) {
            bgPreview.classList.remove("bg-grey");
            bgPreview.classList.add("bg-orange");
            bgPreview.classList.remove("bg-green");

        } else if (targetData.field1 === 3) {
            bgPreview.classList.remove("bg-grey");
            bgPreview.classList.remove("bg-orange");
            bgPreview.classList.add("bg-green");
        }
        
    })
