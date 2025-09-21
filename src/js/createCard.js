"use strict";
// Importa la librería validator.js para validar datos (como emails)
import validator from "validator";

//Seleccionar elementos del DOM
const createCardButton = document.querySelector(".js-createCard-btn");

//Función manejadora "Crear tarjeta"
const handleCreateCard = (ev) => {
    ev.preventDefault();
    showLoading();

    // Simulación de carga de 2 segundos
    setTimeout(() => {
        hideLoading();  // Aquí se oculta el overlay
    }, 8000);

    // Validación de formulario: si hay campos vacíos, no continuar
    if (!validateForm()) {
        hideLoading();
        return;
    } 

    // Validación de email usando validator.js
    if (!validator.isEmail(inputEmail.value)) {
        showOverlayError("Por favor, escribe un Email válido"); // Muestra overlay de error si email no es válido
        hideLoading();
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

            // Redirigir directamente a la página con el id generado
            window.location.href = `./card.html?id=${idCard}`;
        })
        .catch(err => {
            console.error("Error al crear tarjeta:", err); // Captura y muestra errores
            showOverlayError("Error al cargar las tareas. Por favor, inténtalo de nuevo más tarde.");
            hideLoading();  
        });
    };

// Evento tipo click
createCardButton.addEventListener("click", handleCreateCard);