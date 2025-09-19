

"use strict";

const createCardButton = document.querySelector(".js-createCard-btn");
const linkCard = document.querySelector(".js-linkCard");

/* --- Función para obtener ID de la URL --- */
function getCardIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("cardId"); // usar el mismo parámetro que fill.js
}

/*  Función para crear o actualizar tarjeta  */
function handleCreateCard(ev) {
    ev.preventDefault();

    const existingId = getCardIdFromURL();

    let idLoad;

    if (existingId) {
        // Si hay ID, lo añadimos al body para actualizar
        idLoad = Object.assign({}, formData, { infoID: existingId });
    } else {
        idLoad = formData;
    }

    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST", // siempre POST
        body: JSON.stringify(idLoad),
        headers: { "Content-type": "application/json" },
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        let idCard;

        if (existingId) {
            idCard = existingId;
        } else {
            idCard = data.infoID;
        }

        linkCard.classList.remove("hidden");
        linkCard.href = "./card.html?id=" + idCard;

        // Actualizar URL para mantener cardId al volver atrás
        window.history.replaceState(null, null, "?cardId=" + idCard);

        console.log("Tarjeta creada/actualizada con ID:", idCard);
        })
        .catch(function(err) {
        console.error("Error al crear/actualizar tarjeta:", err);
        });
}

/* --- Event listener --- */
createCardButton.addEventListener("click", handleCreateCard);
