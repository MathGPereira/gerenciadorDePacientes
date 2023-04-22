import Sistema from "./classes/Sistema.js";
import { imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const formularioLogin = document.querySelector("[data-login-formulario]");

window.addEventListener("load", async () => {
    sistema.autoComplete();
});

formularioLogin.addEventListener("submit", async evento => {
    evento.preventDefault();

    let emailDigitado = document.querySelector("[data-email]");
    let senhaDigitada = document.querySelector("[data-senha]");

    if(await sistema.validaLogin(emailDigitado.value, senhaDigitada.value)) {
        sistema.gravaLocalStorage(emailDigitado.value, senhaDigitada.value);
        sistema.setCache(emailDigitado.value);

        window.location.replace("./assets/paginas/home.html");
    }else {
        imprimeErro("Usuário ou senha incorretos");        

        emailDigitado.value = "";
        senhaDigitada.value = "";
    }
});
