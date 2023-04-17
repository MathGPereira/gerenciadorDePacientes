export async function getDb() {
    const caminho = "http://localhost:3000/paciente";
    const requisicao = await fetch(caminho);
    const requisicaoJson = await requisicao.json();

    return requisicaoJson; 
}

export async function setDb() {
    const caminho = "http://localhost:3000/paciente";
    const requisicao = await fetch(caminho, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(paciente)
    });
    const requisicaoJson = await requisicao.json();

    return requisicaoJson; 
}