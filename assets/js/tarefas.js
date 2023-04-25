import Sistema from "./classes/Sistema.js";
import { geraTarefaNaTela } from "./auxiliar/funcoesAuxiliares.js";

const sistema = new Sistema();
const botaoAdicionaPaciente = document.querySelector("[data-adiciona-paciente]");
const textArea = document.querySelector("[data-area]");
const formulario = document.querySelector("[data-tarefas]");

textArea.addEventListener("blur", async () => {
    const tarefa = textArea.value;
    
    await sistema.colocaTarefa(tarefa);
    textArea.value = "";
    textArea.classList.toggle("inativo");
});

botaoAdicionaPaciente.addEventListener("click", () => {
    textArea.classList.toggle("inativo");
});
