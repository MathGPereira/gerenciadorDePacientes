export default async function getSetDb(metodo, cadastro, tipoEntrada) {
    let requisicao;
    const caminho = `http://localhost:3000/${tipoEntrada}`;

    try {
        requisicao = await fetch(caminho, validaOpcoes(metodo, cadastro));
    }catch(e) {
        throw new Error("Não há nenhum cadastro com esse id");
    }finally {
        const requisicaoJson = await requisicao.json();
        return requisicaoJson; 
    }
}

function validaOpcoes(metodo, cadastro) {
    let option;

    if(metodo === "GET") {
        option = {
            method: `${metodo}`
        };
    }else if(metodo === "POST") {
        option = {
            method: `${metodo}`,
            headers: {
                "Content-type": "application/json"
            },
            body: `${JSON.stringify(cadastro)}`
        };
    }

    return option;
}
