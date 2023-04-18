export async function getSetDb(metodo, paciente) {
    const caminho = "http://localhost:3000/paciente";
    const requisicao = await fetch(caminho, validaOpcoes(metodo, paciente));
    const requisicaoJson = await requisicao.json();

    return requisicaoJson; 
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
