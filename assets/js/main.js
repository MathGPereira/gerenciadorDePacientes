import Sistema from "./classes/Sistema.js";

const sistema = new Sistema();
document.querySelector(".login__entrar").addEventListener("click", (e) => {
    e.preventDefault();

    //sistema.setCadastro("matheus", "pereira", "medico", "matheusgp.mto@outlook.com");
    sistema.getCadastro(1, null, "medico");
});
