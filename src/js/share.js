"use strict";

const whatsappBtn = document.querySelector(".js-whatsapp-icon");
const twitterBtn = document.querySelector(".js-twitter-icon");
const telegramBtn = document.querySelector(".js-telegramn-icon");
const linkedinBtn = document.querySelector(".js-linkedin-icon");

const shareLink = `https://lauramartinezperez.github.io/My-Application-Card/sharecard.html?id=${cardId}`;
const shareMessage = `Comparto con ustedes mi tarjeta CV personalizada: ${shareLink}`;

const handleShareWhatsapp = () => {
    if (!cardId) return;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappURL, "_blank");
};

const handleShareTwitter = () => {
    if (!cardId) return;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
    window.open(twitterURL, "_blank");
};

const handleShareTelegram = () => {
    if (!cardId) return;
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(shareLink)}`;
    window.open(telegramURL, "_blank");
};

const handleShareLinkedin = () => {
    if (!cardId) return;
    const linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareLink)}`;
    window.open(linkedinURL, "_blank");
}





// Función para compartir en WhatsApp
/* const handleShareWhatsapp = () => {


  if (!cardId) return;

  // Usar sharecard.html (sin botón volver)
const link = `https://lauramartinezperez.github.io/My-Application-Card/sharecard.html?id=${cardId}`;


  console.log("Ha hecho click en icono whatsapp", shareLink);

 const message = `Comparto con ustedes mi tarjeta CV personalizada: ${link}`;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

whatsappBtn.addEventListener("click", handleShareWhatsapp); */
