const modificadorDeEstado = document.querySelectorAll("[data-modificador-estado]");
const menuLateral = document.querySelector("[data-menu-lateral]");

modificadorDeEstado.forEach(modificador => {
    modificador.addEventListener("click", () => {
        if(modificador.dataset.modificadorEstado === "principal") {
            menuLateral.classList.remove("ativo")
        }else {
            menuLateral.classList.add("ativo")
        }
    })
});
