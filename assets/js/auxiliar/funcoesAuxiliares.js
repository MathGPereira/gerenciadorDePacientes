export function imprimeErro(mensagemDeErro) {
    const span = document.querySelector("[data-mensagem-erro]");
    const p = document.createElement("p");
    
    p.setAttribute("class", "erro-mensagem");
    p.innerHTML = mensagemDeErro;
    span.innerHTML = "";

    span.appendChild(p);
}

export function contarSegundos(tag) {
    tag.innerHTML -= 1;
}
