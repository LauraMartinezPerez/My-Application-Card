"use strict";

/* const nameInput = document.querySelector(".js_name");
const cityInput = document.querySelector(".js_city");
const languagesInput = document.querySelector(".js_languages");
const emailInput = document.querySelector(".js_email");
const aboutMeInput = document.querySelector(".js_aboutMe");
const trainingInput = document.querySelector(".js_training");
const skillsInput = document.querySelector(".js_skills");
const technologiesInput = document.querySelector(".js_technologies");
const linkedinInput = document.querySelector(".js_linkedin");
const motivationInput = document.querySelector(".js_motivation");     */

const previewName = document.querySelector(".js_preview_profileName");
const previewCity = document.querySelector(".js_preview_city");
const previewLanguages = document.querySelector(".js_preview_languages");
const previewEmail = document.querySelector(".js_preview_email");
const previewAboutMe = document.querySelector(".js_preview_aboutMe");
const previewTraining = document.querySelector(".js_preview_training");
const previewSkills = document.querySelector(".js_preview_skills");
const previewTechnologies = document.querySelector(".js_preview_technologies");
const previewLinkedin = document.querySelector(".js_preview_linkedin");
const previewMotivation = document.querySelector(".js_preview_motivation");
const bgReset = document.querySelector(".js-bg-reset"); 

const profilePreviewImg = document.querySelector(".js__profile-preview");
const userProfilePhoto = document.querySelector(".js__profile-image");

const fields = ["profileName", "city", "languages", "email", "aboutMe", "training", "skills", "technologies", "linkedin", "motivation"];
const resetBtn = document.querySelector(".js_reset");

const formFill = document.querySelector(".js-formFill");

//Funcion para escuchar los inputs y mostrar en el preview
/* for (const field of fields) {
    const input = document.querySelector(`.js_${field}`);
    const preview = document.querySelector (`.js_preview_${field}`);
    input.addEventListener("input", () => {
        preview.innerHTML = input.value;
    });
}  */

const formData = {
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
  field10: "",
  photo: ""
}


const handleInput = (event) => {
    const inputValue = event.target.value;

    if (event.target.id === "name") {
        previewName.innerHTML = inputValue;
        formData.field1 = inputValue;
    } else if (event.target.id === "city") {
        previewCity.innerHTML = inputValue;
        formData.field2 = inputValue;
    } else if (event.target.id === "languages") {
        previewLanguages.innerHTML = inputValue;
        formData.field3 = inputValue;
    } else if (event.target.id === "email") {
        previewEmail.innerHTML = inputValue;
        formData.field4 = inputValue;
    } else if (event.target.id === "about-me") {
        previewAboutMe.innerHTML = inputValue;
        formData.field5 = inputValue;
    } else if (event.target.id === "training") {
        previewTraining.innerHTML = inputValue;
        formData.field6 = inputValue;
    } else if (event.target.id === "soft-skills") {
        previewSkills.innerHTML = inputValue;
        formData.field7 = inputValue;
    } else if (event.target.id === "technologies") {
        previewTechnologies.innerHTML = inputValue;
        formData.field8 = inputValue;
    } else if (event.target.id === "linkedin") {
        previewLinkedin.innerHTML = inputValue;
        formData.field9 = inputValue;
    } else if (event.target.id === "motivation") {
        previewMotivation.innerHTML = inputValue;
        formData.field10 = inputValue;
    } 
};


formFill.addEventListener("input", handleInput);







// Funcion Reset

const photoTemplate = "./user.png";

resetBtn.addEventListener("click", (ev) => {

bgReset.classList.remove("bg-grey");
bgReset.classList.remove("bg-orange");
bgReset.classList.remove("bg-green");
bgReset.classList.add("bg-neutro");
previewName.innerHTML = "nombre";
previewCity.innerHTML = "ciudad";
previewLanguages.innerHTML = "idiomas";
previewEmail.innerHTML = "email";
previewAboutMe.innerHTML = "Sobre mi";
previewTraining.innerHTML = "Formación";
previewSkills.innerHTML = "Soft skills";
previewTechnologies.innerHTML = "Stack tecnológico";
previewLinkedin.innerHTML = "Enlace linkedIn";
previewMotivation.innerHTML = "Situación actual y motivación al puesto";
profilePreviewImg.src = photoTemplate;
userProfilePhoto.src = photoTemplate;
});

    
    
