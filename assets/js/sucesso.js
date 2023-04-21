import { contarSegundos } from "./auxiliar/funcoesAuxiliares.js";

setInterval(() => {
    const tag = document.querySelector("[data-tempo]");

    contarSegundos(tag);
}, 1000);

setTimeout(() => {
    window.location.replace("../../index.html");
}, 4000);
