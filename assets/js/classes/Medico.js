// import getSetDb from "../conectaBancoDados/conectaDb.js";
// import Paciente from "./Paciente.js";

export default class Medico {

    static id = 0;
    nome;
    sobrenome;
    email;

    constructor(nome, sobrenome, email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        Medico.id++;
    }

    // async setPaciente(nome, sobrenome, idade, sexo, tratamento, dataConsulta) {
    //     const paciente = new Paciente(nome, sobrenome, idade, sexo, tratamento, dataConsulta);
    //     const BancoDeDados = await getSetDb("POST", paciente, "paciente");

    //     console.log("Paciente cadastrado com sucesso");
    // }

    // async getPaciente(id) {
    //     const BancoDeDados = await getSetDb("GET");

    //     if(JSON.stringify(BancoDeDados).includes(`"id":${id}`)) {
    //         BancoDeDados.forEach(paciente => {
    //             if (paciente.id === id) {
    //                 const {id, nome, sobrenome, idade, sexo, tratamento, consulta} = paciente;
    //                 console.log(id)
    //                 console.log(nome);
    //                 console.log(sobrenome);
    //                 console.log(idade);
    //                 console.log(sexo);
    //                 console.log(tratamento);
    //                 console.log(consulta);
    //             }
    //         });
    //     }else {
    //         console.log("Não há nenhum paciente com este id cadastrado");
    //     }
    // }
}
