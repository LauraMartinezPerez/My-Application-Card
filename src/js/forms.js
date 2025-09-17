"use strict";


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


const fields = ["profileName", "city", "languages", "email", "aboutMe", "training", "skills", "technologies", "linkedin", "motivation"];


const formFill = document.querySelector(".js-formFill");


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
/*     field10: "", */
    photo: ""
}

const handleInput = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    if (event.target.id === "name") {
        previewName.innerHTML = inputValue;
        formData.field2 = inputValue;
    } else if (event.target.id === "city") {
        previewCity.innerHTML = inputValue;
        formData.field3 = inputValue;
    } /* else if (event.target.id === "languages") {
        previewLanguages.innerHTML = inputValue;
        formData.field3 = inputValue;
    } */ else if (event.target.id === "email") {
        previewEmail.innerHTML = inputValue;
        formData.field4 = inputValue;
    } /* else if (event.target.id === "about-me") {
        previewAboutMe.innerHTML = inputValue;
        formData.field5 = inputValue;
    } */ else if (event.target.id === "training") {
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









    
    
