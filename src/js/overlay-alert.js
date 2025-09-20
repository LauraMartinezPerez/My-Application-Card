"use strict";

const overlayAlert = document.querySelector(".js-overlay-alert");
const overlayClose = document.querySelector(".js-overlay-close");
const overlayErrorMessage = document.querySelector(".js-overlay-error-message");

//Muestra una alerta personalizada
const showOverlayError = (message) => {
    overlayErrorMessage.textContent = message;
    overlayAlert.style.display = "flex";
}

//Cierra la alerta al hacer click en el boton
const hideOverlayError = () => {
    overlayAlert.style.display = "none";
}
overlayClose.addEventListener("click", hideOverlayError);

//Cierra la alerta al hacer click en cualquier parte del overlay
const handleCloseOverlay = () => {
    overlayAlert.style.display = "none";
}
overlayAlert.addEventListener("click", handleCloseOverlay);

const validateForm = () => {
    const requiredFields = [
        formData.field2,
        formData.field3,
        formData.field4,
        formData.field5,
        formData.field6,
        formData.field7,
        formData.field8,
        formData.field9,
    ]

    for (const requiredField of requiredFields) {
        if (requiredField.trim() === "") {
            showOverlayError("Por favor, rellena todos los campos");
            return false;
        }
    } 
    return true;
}
    
    
