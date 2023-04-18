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
}
