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

  // Reset formData a valores iniciales
  formData.field1 = 0;
  formData.field2 = "";
  formData.field3 = "";
  formData.field4 = "";
  formData.field5 = "";
  formData.field6 = "";
  formData.field7 = "";
  formData.field8 = "";
  formData.field9 = "";
  formData.photo = "./user.png";

  //Borrar cardId de la URL para generar un nuevo ID al crear una nueva tarjeta
  window.history.replaceState(null, null, "./forms.html");
  console.log(formData);
};

// Evento
resetBtn.addEventListener("click", handleReset);