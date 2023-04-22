import Sistema from "./classes/Sistema.js";
import { criaTemplatePaciente } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const pacientes = await sistema.getCadastro(null, "paciente");

pacientes.forEach(paciente => {
    const {nome, sobrenome, idade, sexo, tratamento, consulta} = paciente;
    const artigo = document.querySelector("[data-artigo]");

    artigo.innerHTML += criaTemplatePaciente(nome, idade, tratamento, consulta);
});