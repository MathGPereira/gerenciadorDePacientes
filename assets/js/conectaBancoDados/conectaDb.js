export default async function getSetDb(metodo, paciente, tipoEntrada) {
    let requisicao;
    const caminho = `http://localhost:3000/${tipoEntrada}`;

    try {
        requisicao = await fetch(caminho, validaOpcoes(metodo, paciente));
    }catch(e) {
        console.log(e);
    }finally {
        const requisicaoJson = await requisicao.json();
        return requisicaoJson; 
    }
}

function validaOpcoes(metodo, paciente) {
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
            body: `${JSON.stringify(paciente)}`
        };
    }

    return option;
}
