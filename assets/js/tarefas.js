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

window.addEventListener("load", async () => {
    await sistema.verificaTarefasNoBancoEColocaNaTelaAoCarregar(formulario);

    const botoesMudaEstado = document.querySelectorAll("[data-muda-estado]");

    botoesMudaEstado.forEach(botaoMudaEstado => {
        botaoMudaEstado.addEventListener("click", async () => {
            const tarefa = botaoMudaEstado.parentNode;

            if(botaoMudaEstado.dataset.mudaEstado === "editar") {
                // await sistema.editaTarefa();
                console.log("editei")
            }else {
                await sistema.deletaTarefa(tarefa.dataset.id);
            }
        });
    });
})
