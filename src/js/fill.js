"use strict";

/* --- SELECTORES --- */
const previewName = document.querySelector(".js_preview_profileName");
const previewCity = document.querySelector(".js_preview_city");
const previewEmail = document.querySelector(".js_preview_email");
const previewTraining = document.querySelector(".js_preview_training");
const previewSkills = document.querySelector(".js_preview_skills");
const previewTechnologies = document.querySelector(".js_preview_technologies");
const previewLinkedin = document.querySelector(".js_preview_linkedin");
const previewMotivation = document.querySelector(".js_preview_motivation");

const formFill = document.querySelector(".js-formFill");
const photoCard = document.querySelector(".js__profile-preview");
const imagePhoto = document.querySelector(".js__profile-image");

const inputProfielName = document.querySelector(".js_profileName")
const inputCity = document.querySelector(".js_city")
const inputEmail = document.querySelector(".js_email")
const inputTraining = document.querySelector(".js_training")
const inputSkills = document.querySelector(".js_skills")
const inputTechnologies = document.querySelector(".js_technologies")
const inputLinkedin = document.querySelector(".js_linkedin")
const inputMotivation = document.querySelector(".js_motivation")

/*  DATOS DEL FORMULARIO  */
const formData = {
  field1: 0,
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
  photo: "./user.png"
};

/*  FUNCION PARA ACTUALIZAR FORMULARIO Y PREVIEW AL ESCRIBIR  */
const handleInput = (event) => {
  const inputValue = event.target.value;

  if (event.target.id === "name") {
    previewName.innerHTML = inputValue;
    formData.field2 = inputValue;
  } else if (event.target.id === "city") {
    previewCity.innerHTML = inputValue;
    formData.field3 = inputValue;
  } else if (event.target.id === "email") {
    previewEmail.innerHTML = inputValue;
    formData.field4 = inputValue;
  } else if (event.target.id === "training") {
    previewTraining.innerHTML = inputValue;
    formData.field5 = inputValue;
  } else if (event.target.id === "soft-skills") {
    previewSkills.innerHTML = inputValue;
    formData.field6 = inputValue;
  } else if (event.target.id === "technologies") {
    previewTechnologies.innerHTML = inputValue;
    formData.field7 = inputValue;
  } else if (event.target.id === "linkedin") {
    previewLinkedin.innerHTML = inputValue;
    formData.field8 = inputValue;
  } else if (event.target.id === "motivation") {
    previewMotivation.innerHTML = inputValue;
    formData.field9 = inputValue;
  }

  console.log(formData);
};

formFill.addEventListener("input", handleInput);

/*  RECUPERAR DATOS DE TARJETA SI HAY cardId EN LA URL  */
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("cardId");

if (cardId) {
  fetch(`https://dev.adalab.es/api/info/${cardId}`)
    .then(response => response.json())
    .then(data => {
      const targetData = data.data;

      // Rellenar inputs
      inputProfielName.value = targetData.field2;
      inputCity.value = targetData.field3;
      inputEmail.value = targetData.field4;
      inputTraining.value = targetData.field5;
      inputSkills.value = targetData.field6;
      inputTechnologies.value = targetData.field7;
      inputLinkedin.value = targetData.field8;
      inputMotivation.value = targetData.field9;
      imagePhoto.src = targetData.photo;

      // Rellenar preview
      previewName.innerHTML = targetData.field2;
      previewCity.innerHTML = targetData.field3;
      previewEmail.innerHTML = targetData.field4;
      previewTraining.innerHTML = targetData.field5;
      previewSkills.innerHTML = targetData.field6;
      previewTechnologies.innerHTML = targetData.field7;
      previewLinkedin.innerHTML = targetData.field8;
      previewMotivation.innerHTML = targetData.field9;
      photoCard.src = targetData.photo;


      // Actualizar formData
      formData.field1 = targetData.field1;
      formData.field2 = targetData.field2;
      formData.field3 = targetData.field3;
      formData.field4 = targetData.field4;
      formData.field5 = targetData.field5;
      formData.field6 = targetData.field6;
      formData.field7 = targetData.field7;
      formData.field8 = targetData.field8;
      formData.field9 = targetData.field9;
      formData.photo = targetData.photo;

      // Color de fondo según field1
      const bgPreview = document.querySelector(".js-bg-preview");
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
    })
    .catch(err => console.error("Error al recuperar tarjeta:", err));
}
