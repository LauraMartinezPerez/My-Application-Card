"use strict";

/* Cuando la usuaria haga "click" en Crear tarjeta, enviar los datos del formulario al servidor (petición de tipo POST).
El servidor responde con:
1. OK
2. id
Recoger id para poner en el enlace que se muestra a la usuaria.
Mostrar enlace a la usuaria. */

const createCardButton = document.querySelector(".js-createCard-btn");
const phrase = document.querySelector(".js-phrase");
const linkCard = document.querySelector(".js-linkCard");
 
const handleCreateCard = (ev) => {
    ev.preventDefault();
    console.log("ha hecho click en crear tarjeta")
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" },
    }) 
        .then(response => response.json())
        .then(data => {
            console.log("esto es data de POST", data);
            const idCard = data.infoID;
            console.log("esto es idCard", idCard);
            linkCard.classList.remove("hidden");
            linkCard.href = `./card.html?id=${idCard}`;
        })
}

createCardButton.addEventListener("click", handleCreateCard);

/*     const phraseValue = phrase.value;
    fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phrase: phraseValue,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            phrase.classList.add("hidden");
            createCardButton.classList.add("hidden");
            linkCard.classList.remove("hidden");
            linkCard.href = `http://localhost:3000/cards/${data.id}`;
        }); */