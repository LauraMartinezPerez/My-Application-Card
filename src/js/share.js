"use strict";
// Importa la librería validator.js para validar datos (como emails)
import validator from "validator";

// Selecciona elementos del DOM
const createCardButton = document.querySelector(".js-createCard-btn"); 
const linkCard = document.querySelector(".js-linkCard"); 
const shareIcons = document.querySelector(".js-share-icons"); 

// Función manejadora "Crear tarjeta"
const handleCreateCard = (ev) => {
    ev.preventDefault();

    // Validación de formulario: si hay campos vacíos, no continuar
    if (!validateForm()) {
        return;
    } 

    // Validación de email usando validator.js
    if (!validator.isEmail(inputEmail.value)) {
        showOverlayError("Por favor, escribe un Email válido"); // Muestra overlay de error si email no es válido
        return; // Detiene la ejecución
    }

    // Enviar los datos al servidor usando fetch (POST)
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        body: JSON.stringify(formData), // Se envía el objeto con los datos del formulario en strings
        headers: { "Content-type": "application/json" },
    }) 
        .then(response => response.json()) // Convierte la respuesta a JSON
        .then(data => {
            console.log(data); 

            const idCard = data.infoID; // Guarda el ID de la tarjeta recién creada

            // Mostrar enlace a la tarjeta creada y actualizar su href
            linkCard.classList.remove("hidden");
            linkCard.href = `./card.html?id=${idCard}`;

            // Mostrar los iconos de compartir
            shareIcons.style.display = "flex";
        })
        .catch(err => console.error("Error al crear tarjeta:", err)); // Captura y muestra errores
}

// Evento tipo click
createCardButton.addEventListener("click", handleCreateCard);
