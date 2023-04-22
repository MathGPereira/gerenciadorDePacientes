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

export function criaTemplatePaciente(nome, idade, tratamento, data) {
    const template = `
        <section class="principal__consultas principal__paciente">
            <div class="consultas__cabecalho">
                <img src="../img/perfil/perfil.avif" alt="" class="cabecalho__imagem-paciente">
                <h2 class="consulta__titulo">${nome}</h2>
                <p class="consulta__idade">
                    Idade:
                    <span class="idade">${idade}</span>
                </p>
            </div>
            <div class="consultas__corpo">
                <p class="corpo__tratamento">
                    Tratamento:
                    <span class="tratamento">${tratamento}</span>
                </p>
                <p class="corpo__proxima-consulta">
                    Próxima consulta:
                    <span class="consulta">${data}</span>
                </p>
                <p class="corpo__proxima-consulta">Hoje</p>
            </div>
            <div class="consultas__rodape">
                <a href="#" class="consultas__visualizar" target="_self" rel="next nofollow">Visualizar</a>
                <button class="rodape__botao">Alterar</button>
                <button class="rodape__botao rodape__excluir">Excluir</button>
            </div>
        </section>
    `;

    return template;
}
