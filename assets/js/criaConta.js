import Sistema from "./classes/Sistema.js";
import { imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const inputsSenha = document.querySelectorAll("[data-senha]");
const formularioCadastro = document.querySelector("[data-formulario-cadastro]");
const [senha, confirmaSenha] = [...inputsSenha];

formularioCadastro.addEventListener("submit", async evento => {
    evento.preventDefault();

    if(sistema.validaCadastro(senha, confirmaSenha)) {
        const [nome, sobrenome, email, senha] = [...document.querySelectorAll("[data-input]")];
        const listaMedicosCadastrados = await sistema.getCadastro(null, "medico");

        if(JSON.stringify(listaMedicosCadastrados).includes(`"${email.value}"`)) {
            imprimeErro("Já existe um cadastro com este e-mail!");
        }else {
            sistema.setCadastro(nome.value, sobrenome.value, "medico", email.value, senha.value);
            window.location.replace("../paginas/cadastroConcluido.html");
        }
    }else {
        senha.value = "";
        confirmaSenha.value = "";

        imprimeErro("As senhas não coincidem!");
    }
});
