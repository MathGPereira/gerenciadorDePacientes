import Sistema from "./classes/Sistema.js";
import { geraPacientesNaTela } from "./auxiliar/funcoesAuxiliares.js";

let botoesExcluirPaciente;
const sistema = new Sistema();

window.addEventListener("load", async () => {
    await geraPacientesNaTela(sistema);

    botoesExcluirPaciente = document.querySelectorAll("[data-excluir-paciente]");

    botoesExcluirPaciente.forEach(botaoExcluirPaciente => {
        botaoExcluirPaciente.addEventListener("click", async evento => {
            evento.preventDefault();
            
            sistema.deletaPaciente(evento.target.dataset.id)
            await geraPacientesNaTela(sistema);
        });
    });
});



