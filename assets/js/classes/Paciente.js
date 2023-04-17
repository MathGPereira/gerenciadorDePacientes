import {getDb} from "../conectaBancoDados/conectaDb.js";

export class Paciente {

    id;
    nome;
    sobrenome;
    idade;
    sexo;

    constructor(nome, sobrenome, idade, sexo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.sexo = sexo.toUppercase;
    }

    async verificaPaciente(id) {
        const BancoDeDados = await getDb();

        if(JSON.stringify(BancoDeDados).includes(`"id":${id}`)) {
            BancoDeDados.forEach(paciente => {
                if (paciente.id === id) {
                    console.log(paciente);
                }
            });
        }else {
            console.log("Não há nenhum paciente com este id cadastrado");
        }
    }
}
