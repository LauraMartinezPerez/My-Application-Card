"use strict";

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

const backLink = document.querySelector(".js-backLink");


//Obtener el id de la url
const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");
console.log(id);

if (id) {
  /*  FETCH PARA OBTENER DATOS DE LA TARJETA */
  fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(response => response.json())
    .then(data => {
      const targetData = data.data;

      // Rellenar preview
      nameCard.innerText = targetData.field2;
      cityCard.innerText = targetData.field3;
      emailCard.innerText = targetData.field4;
      trainingCard.innerText = targetData.field5;
      skillsCard.innerText = targetData.field6;
      technologiesCard.innerText = targetData.field7;
      linkedinCard.innerText = targetData.field8;
      motivationCard.innerText = targetData.field9;
      photoCard.src = targetData.photo;

      // Fondo según field1
      if (targetData.field1 === 1) {
        bgPreview.classList.add("bg-grey");
        bgPreview.classList.remove("bg-orange", "bg-green");
      } else if (targetData.field1 === 2) {
        bgPreview.classList.add("bg-orange");
        bgPreview.classList.remove("bg-grey", "bg-green");
      } else if (targetData.field1 === 3) {
        bgPreview.classList.add("bg-green");
        bgPreview.classList.remove("bg-grey", "bg-orange");
      }

      // Configurar botón ATRÁS dinámicamente
      backLink.href = `./forms.html?cardId=${id}`;
    })
    .catch(err => console.error("Error al recuperar tarjeta:", err));
} else if (id === null)
  console.log(id);
  {
    
  // Si no hay id o id null, el botón ATRÁS apunta al formulario sin id
  backLink.href = "./forms.html";
}

    