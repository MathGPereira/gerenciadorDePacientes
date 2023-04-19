import Sistema from "./classes/Sistema.js";
import { imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

let emailDigitado = document.querySelector("[data-email]");
let senhaDigitada = document.querySelector("[data-senha]");
const sistema = new Sistema();
const formularioLogin = document.querySelector("[data-login-formulario]");

window.addEventListener("load", () => {
    sistema.autoComplete();
});

formularioLogin.addEventListener("submit", async evento => {
    evento.preventDefault();

    if(await sistema.validaLogin(emailDigitado.value, senhaDigitada.value)) {
        sistema.gravaLocalStorage(emailDigitado.value, senhaDigitada.value);

        window.location.replace("./assets/paginas/home.html");
    }else {
        imprimeErro("Usuário ou senha incorretos");

        console.log(emailDigitado.value)
        console.log(senhaDigitada.value)
        

        emailDigitado.value = "";
        senhaDigitada.value = "";
    }
});

