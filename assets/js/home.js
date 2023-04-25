import Sistema from "./classes/Sistema.js";

const sistema = new Sistema();
const modificadorDeEstado = document.querySelectorAll("[data-modificador-estado]");
const menuLateral = document.querySelector("[data-menu-lateral]");
const spansNome = document.querySelectorAll("[data-nome]");
const formularioHome = document.querySelector("[data-formulario]");

spansNome.forEach(async span => {
    const resposta = await sistema.getCache()
    
    span.innerHTML = resposta;
});

modificadorDeEstado.forEach(modificador => {
    modificador.addEventListener("click", () => {
        if(modificador.dataset.modificadorEstado === "principal") {
            menuLateral.classList.remove("ativo")
        }else {
            menuLateral.classList.add("ativo")
        }
    })
});

if(window.location.href.includes("home.html")) {
    sistema.verificaTarefasNoBancoEColocaNaTelaAoCarregar(formularioHome);
}
