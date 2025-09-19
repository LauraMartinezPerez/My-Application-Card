"use strict";

// Selectores
const photoTemplate = "./user.png";
const resetBtn = document.querySelector(".js_reset");
const bgReset = document.querySelector(".js-bg-reset"); 
const profilePreviewImg = document.querySelector(".js__profile-image");
const userProfilePhoto = document.querySelector(".js__profile-preview");

// Funcion Reset
const handleReset = (ev) => {

bgReset.classList.remove("bg-grey");
bgReset.classList.remove("bg-orange");
bgReset.classList.remove("bg-green");
bgReset.classList.add("bg-neutro");
previewName.innerHTML = "nombre";
previewCity.innerHTML = "ciudad";
previewEmail.innerHTML = "email";
previewTraining.innerHTML = "Formación";
previewSkills.innerHTML = "Soft skills";
previewTechnologies.innerHTML = "Stack tecnológico";
previewLinkedin.innerHTML = "Enlace linkedIn";
previewMotivation.innerHTML = "Situación actual y motivación al puesto";
profilePreviewImg.src = photoTemplate;
userProfilePhoto.src = photoTemplate;

  //Borrar cardId de la URL para generar un nuevo ID al crear una nueva tarjeta
  window.history.replaceState(null, null, "./forms.html");
};

// Evento
resetBtn.addEventListener("click", handleReset);