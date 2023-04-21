import Sistema from "./classes/Sistema.js";
import { imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const inputsSenha = document.querySelectorAll("[data-senha]");
const formulario = document.querySelector("[data-formulario-troca-senha]");
const [senha, confirmaSenha] = [...inputsSenha];

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    if(sistema.validaCadastro(senha, confirmaSenha)) {
        sistema.mudaSenha(senha.value);
    }else {
        imprimeErro("Senhas não são coincidentes");
    }
});
