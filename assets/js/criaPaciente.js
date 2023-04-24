import Sistema from "./classes/Sistema.js";

const sistema = new Sistema();
const formularioAdicionaPaciente = document.querySelector("[data-formulario-adiciona-paciente]");

formularioAdicionaPaciente.addEventListener("submit", evento => {
    evento.preventDefault();

    const inputsPaciente = document.querySelectorAll("[data-input]");
    const [nome, sobrenome, idade, sexo, tratamento, consulta] = [...inputsPaciente];
    const data = new Date(consulta.value);
    const dataFormatada = (data.getDate() + 1) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    sistema.setCadastro(nome.value, sobrenome.value, "paciente", idade.value, sexo.value.toUpperCase(), tratamento.value, dataFormatada);
    window.location.href = "../paginas/pacientes.html";
});
