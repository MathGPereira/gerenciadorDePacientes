import Sistema from "./classes/Sistema.js";
import { imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const inputsSenha = document.querySelectorAll("[data-senha]");
const formularioCadastro = document.querySelector("[data-formulario-cadastro]");
const [senha, confirmaSenha] = [...inputsSenha];

formularioCadastro.addEventListener("submit", evento => {
    evento.preventDefault();

    if(sistema.validaCadastro(senha, confirmaSenha)) {
        const [nome, sobrenome, email, senha] = [...document.querySelectorAll("[data-input]")];

        sistema.setCadastro(nome.value, sobrenome.value, "medico", email.value, senha.value);
        console.log("construido")
        window.location.replace("../paginas/cadastroConcluido.html");
    }else {
        senha.value = "";
        confirmaSenha.value = "";

        imprimeErro("As senhas não coincidem!");
    }
});
