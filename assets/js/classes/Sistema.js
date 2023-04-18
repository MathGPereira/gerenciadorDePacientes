//import getSetDb from "../conectaBancoDados/conectaDb.js"
import Paciente from "./Paciente.js"
import Medico from "./Medico.js";

export default class Sistema {

    async setCadastro(nome, sobrenome, tipoCadastro, ...outrosDados) {
        let pessoaCadastrada;

        if(tipoCadastro === "paciente") {
            const [idade, sexo, tratamento, dataDaConsulta] = [...outrosDados];
            pessoaCadastrada = new Paciente(nome, sobrenome, idade, sexo, tratamento, dataDaConsulta);
        }else if(tipoCadastro === "medico") {
            const [email] = [...outrosDados];
            pessoaCadastrada = new Medico(nome, sobrenome, email);
        }

        await getSetDb("POST", pessoaCadastrada, tipoCadastro);
    }

    async getCadastro(id, cadastro, tipoCadastro) {
        const BancoDeDados = await Sistema.getSetDb("GET", cadastro, tipoCadastro);

        if(JSON.stringify(BancoDeDados).includes(`"id":${id}`)) {
            if(tipoCadastro === "paciente") {
                BancoDeDados.forEach(pessoaCadastrada => {
                    if (pessoaCadastrada.id === id) {
                        const {id, nome, sobrenome, idade, sexo, tratamento, consulta} = pessoaCadastrada;
                    }
                });
            }else if(tipoCadastro === "medico") {
                BancoDeDados.forEach(pessoaCadastrada => {
                    if (pessoaCadastrada.id === id) {
                        const {id, nome, sobrenome, email} = pessoaCadastrada;
                    }
                });
            }
        }else {
            console.log("Não há nenhum paciente com este id cadastrado");
        }
    }

    static async getSetDb(metodo, cadastro, tipoEntrada) {
        let requisicao;
        const caminho = `http://localhost:3000/${tipoEntrada}`;
    
        try {
            requisicao = await fetch(caminho, Sistema.validaOpcoes(metodo, cadastro));
        }catch(e) {
            throw new Error("Não há nenhum cadastro com esse id");
        }finally {
            const requisicaoJson = await requisicao.json();
            return requisicaoJson; 
        }
    }

    static validaOpcoes(metodo, cadastro) {
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
}
