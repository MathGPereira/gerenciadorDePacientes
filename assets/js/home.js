const modificadorDeEstado = document.querySelectorAll("[data-modificador-estado]");
const menuLateral = document.querySelector("[data-menu-lateral]");

modificadorDeEstado.forEach(estado => estado.addEventListener("click", () => menuLateral.classList.toggle("ativo")));
