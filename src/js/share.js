/* "use strict";

// Selecciona elementos del DOM
const whatsappBtn = document.querySelector(".js-whatsapp-icon");


const handleShareWhatsapp = () => {
    console.log("Ha hecho click en icono whatsapp");
    const link = `./card.html?id=${idCard}`;
    const message = "Comparto con ustedes mi tarjeta CV personalizada";
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank"); //Abre la URL de Whatsapp en una nueva ventana
}
whatsappBtn.addEventListener("click", handleShareWhatsapp); */
"use strict";

// Selecciona elementos del DOM
const whatsappBtn = document.querySelector(".js-whatsapp-icon");

// Obtener el id de la URL
const urlParams = new URLSearchParams(window.location.search);
const idCard = urlParams.get("id"); // es el mismo id que se generó en el fetch

// Función para compartir en WhatsApp
const handleShareWhatsapp = () => {
    console.log("Ha hecho click en icono whatsapp");

    // Link directo a la tarjeta con el id
    const link = `https://lauramartinezperez.github.io/My-Application-Card/card.html?id=${idCard}`;

    const message = `Comparto con ustedes mi tarjeta CV personalizada: ${link}`;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp en nueva pestaña/ventana
    window.open(whatsappURL, "_blank");
};

whatsappBtn.addEventListener("click", handleShareWhatsapp);

/*
http://localhost:5174/card.html?id=${idCard}
*/