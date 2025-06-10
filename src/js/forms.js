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
const motivationInput = document.querySelector(".js_motivation");    

const previewName = document.querySelector(".js_preview_name");
const previewCity = document.querySelector(".js_preview_city");
const previewLanguages = document.querySelector(".js_preview_languages");
const previewEmail = document.querySelector(".js_preview_email");
const previewAboutMe = document.querySelector(".js_preview_aboutMe");
const previewTraining = document.querySelector(".js_preview_training");
const previewSkills = document.querySelector(".js_preview_skills");
const previewTechnologies = document.querySelector(".js_preview_technologies");
const previewLinkedin = document.querySelector(".js_preview_linkedin");
const previewMotivation = document.querySelector(".js_preview_motivation");
 */

const fields = ["profileName", "city", "languages", "email", "aboutMe", "training", "skills", "technologies", "linkedin", "motivation"];
const resetBtn = document.querySelector(".js_reset");

//Funcion para escuchar los inputs y mostrar en el preview
for (const field of fields) {
    const input = document.querySelector(`.js_${field}`);
    const preview = document.querySelector (`.js_preview_${field}`);
    input.addEventListener("input", () => {
        console.log(input.value);
        preview.innerHTML = input.value;
    });
} 

// Funcion Reset
resetBtn.addEventListener("click", () => {
    const input = document.querySelector(`.js_${field}`);
    const preview = document.querySelector (`.js_preview_${field}`);
    input.value = "";
    preview.innerHTML = "";
});