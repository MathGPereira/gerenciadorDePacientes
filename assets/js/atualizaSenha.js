import Medico from "./classes/Medico.js";
import Sistema from "./classes/Sistema.js";
import { imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const inputsSenha = document.querySelectorAll("[data-senha]");
const formulario = document.querySelector("[data-formulario-troca-senha]");
const [senha, confirmaSenha] = [...inputsSenha];

formulario.addEventListener("submit", async evento => {
    evento.preventDefault();

    if(sistema.validaCadastro(senha, confirmaSenha)) {
        const medicos = await sistema.getCadastro(null, "medico");
        const email = document.querySelector("[data-email]").value;

        for(let i = 0; i < medicos.length; i++) {
            const medico = medicos[i];

            if(medico.email === email) {
                const objeto = new Medico(medico.nome, medico.sobrenome, email, senha.value, medico.id)


                sistema.mudaSenha(objeto, medico.id);
                break;
            }
        }
    }else {
        imprimeErro("Senhas não são coincidentes");
    }
});
