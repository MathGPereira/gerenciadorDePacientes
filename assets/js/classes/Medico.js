export default class Medico {

    static id = 0;
    nome;
    sobrenome;
    email;
    senha;

    constructor(nome, sobrenome, email, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
        Medico.id++;
    }
}
