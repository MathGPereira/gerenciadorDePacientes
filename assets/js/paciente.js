import Sistema from "./classes/Sistema.js";
import { criaTemplatePaciente, imprimeErro } from "./auxiliar/funcoesAuxiliares.js";

let pacientes;
const sistema = new Sistema();

try {
    pacientes = await sistema.getCadastro(null, "paciente");
    pacientes.forEach(paciente => {
        const {nome, sobrenome, idade, sexo, tratamento, consulta} = paciente;
        const artigo = document.querySelector("[data-artigo]");
    
        artigo.innerHTML += criaTemplatePaciente(nome, sobrenome, idade, sexo, tratamento, consulta);
    });
}catch(erro) {
    imprimeErro("Não há nenhum paciente cadastrado atualmente");
}
