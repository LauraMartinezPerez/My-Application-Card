"use strict";

const createCardButton = document.querySelector(".js-createCard-btn");
const linkCard = document.querySelector(".js-linkCard");
const shareIcons = document.querySelector(".js-share-icons");
 
const handleCreateCard = (ev) => {
    ev.preventDefault();

    if (!validateForm()) {
        return;
    }

    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" },
    }) 
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const idCard = data.infoID;
            
            linkCard.classList.remove("hidden");
            linkCard.href = `./card.html?id=${idCard}`;
            shareIcons.style.display = "flex";
        })
        .catch(err => console.error("Error al crear tarjeta:", err));
}

createCardButton.addEventListener("click", handleCreateCard); 
