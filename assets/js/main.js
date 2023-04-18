import Sistema from "./classes/Sistema.js";

let emailDigitado = document.querySelector("[data-email]");
let senhaDigitada = document.querySelector("[data-senha]");
const sistema = new Sistema();
const formularioLogin = document.querySelector("[data-login-formulario]");

formularioLogin.addEventListener("submit", async evento => {
    evento.preventDefault();

    if(await sistema.validaLogin(emailDigitado.value, senhaDigitada.value)) {
        console.log("true")
        //window.location.href = "./assets/paginas/home.html";
    }

    emailDigitado = "";
    senhaDigitada = "";
});

