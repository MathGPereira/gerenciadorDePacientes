export default class Paciente {

    static id = 0;
    nome;
    sobrenome;
    idade;
    sexo;

    constructor(nome, sobrenome, idade, sexo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.sexo = sexo.toUppercase;
        Paciente.id++;
    }
}
