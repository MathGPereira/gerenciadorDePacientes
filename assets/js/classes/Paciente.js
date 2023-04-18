export default class Paciente {

    static id = 0;
    nome;
    sobrenome;
    idade;
    sexo;
    tratamento;
    consulta;

    constructor(nome, sobrenome, idade, sexo, tratamento, consulta) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.sexo = sexo;
        this.tratamento = tratamento;
        this.consulta = consulta;
        Paciente.id++;
    }
}
