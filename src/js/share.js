/* "use strict";

// Selecciona elementos del DOM
const whatsappBtn = document.querySelector(".js-whatsapp-icon");

// Función para compartir en WhatsApp
const handleShareWhatsapp = () => {
    
     // Link directo a la tarjeta con el id
    const link = `https://lauramartinezperez.github.io/My-Application-Card/card.html?id=${cardId}`;

 console.log("Ha hecho click en icono whatsapp", link);

    const message = `Comparto con ustedes mi tarjeta CV personalizada: ${link}`;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp en nueva pestaña/ventana
    window.open(whatsappURL, "_blank"); 
};

whatsappBtn.addEventListener("click", handleShareWhatsapp);
 */

"use strict";

const whatsappBtn = document.querySelector(".js-whatsapp-icon");

// Función para compartir en WhatsApp
const handleShareWhatsapp = () => {


  if (!cardId) return;

  // Usar sharecard.html (sin botón volver)
   const link = `https://lauramartinezperez.github.io/My-Application-Card/sharecard.html?id=${cardId}`;


  console.log("Ha hecho click en icono whatsapp", link);

  const message = `Comparto con ustedes mi tarjeta CV personalizada: ${link}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

whatsappBtn.addEventListener("click", handleShareWhatsapp);
