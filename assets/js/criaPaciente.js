import Sistema from "./classes/Sistema.js";

const sistema = new Sistema();
const formularioAdicionaPaciente = document.querySelector("[data-formulario-adiciona-paciente]");

formularioAdicionaPaciente.addEventListener("submit", evento => {
    evento.preventDefault();

    const inputsPaciente = document.querySelectorAll("[data-input]");
    const [nome, sobrenome, idade, sexo, tratamento, consulta] = [...inputsPaciente];

    sistema.setCadastro(nome.value, sobrenome.value, "paciente", idade.value, sexo.value, tratamento.value, consulta.value);
});