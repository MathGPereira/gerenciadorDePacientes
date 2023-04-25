import Sistema from "./classes/Sistema.js";

const sistema = new Sistema();
const botaoAdicionaPaciente = document.querySelector("[data-adiciona-paciente]");
const textArea = document.querySelector("[data-area]");
const formulario = document.querySelector("[data-tarefas]");

textArea.addEventListener("blur", () => {
    const novaTarefa = textArea.value;

    sistema.colocaTarefa(novaTarefa);

    textArea.value = "";
    textArea.classList.toggle("inativo");
});

botaoAdicionaPaciente.addEventListener("click", () => {
    textArea.classList.toggle("inativo");
});

window.addEventListener("load", () => {
    sistema.verificaTarefasNoBancoEColocaNaTelaAoCarregar(formulario);
})
