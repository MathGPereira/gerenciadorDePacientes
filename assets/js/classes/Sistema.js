import Paciente from "./Paciente.js"
import Medico from "./Medico.js";

export default class Sistema {

    async setCadastro(nome, sobrenome, tipoCadastro, ...outrosDados) {
        let pessoaCadastrada;

        if(tipoCadastro === "paciente") {
            const [idade, sexo, tratamento, dataDaConsulta] = [...outrosDados];
            pessoaCadastrada = new Paciente(nome, sobrenome, idade, sexo, tratamento, dataDaConsulta);
        }else if(tipoCadastro === "medico") {
            const [email, senha] = [...outrosDados];
            pessoaCadastrada = new Medico(nome, sobrenome, email, senha);
        }

        await Sistema.getSetDb("POST", pessoaCadastrada, tipoCadastro);
    }

    async getCadastro(cadastro, tipoCadastro) {
        const BancoDeDados = await Sistema.getSetDb("GET", cadastro, tipoCadastro);

        if(BancoDeDados.length > 0) {
            return BancoDeDados;
        }

        return "Não há nenhum paciente cadastrado no sistema!";
    }

    async deletaPaciente(id) {
        await Sistema.getSetDb("DELETE", null, "paciente", id)
    }

    async setCache(email) {
        await Sistema.getSetDb("POST", {email}, "cache");
    }

    async getCache() {
        const [...pessoaLogada] = [...await Sistema.getSetDb("GET", null, "cache")];
        const email = pessoaLogada[pessoaLogada.length - 1];
        const banco = await Sistema.getSetDb("GET", null, "medico");

        for(let i = 0; i < banco.length; i++) {
            const item = banco[i];

            if(item.email === email.email) {
                return item.nome;
            }
        }
    }

    async validaLogin(emailDigitado, senhaDigitada) {
        const resposta = await Sistema.getSetDb("GET", null, "medico");
        const listaTrueFalse = [];
        
        for(let i = 0; i < resposta.length; i++) {
            const cadastro = resposta[i];

            if(cadastro.email === emailDigitado && cadastro.senha === senhaDigitada) {
                return true;
            }else {
                listaTrueFalse.push("false");
            }
        }

        return listaTrueFalse.includes("true");
    }

    async mudaSenha(objeto, id) {
        await Sistema.getSetDb("PUT", objeto, "medico", id);
    }

    async colocaTarefa(tarefa) {
        await Sistema.getSetDb("POST", {tarefa: tarefa}, "tarefas");
    }

    gravaLocalStorage(ultimoEmail, ultimaSenha) {
        window.localStorage.clear();
        window.localStorage.setItem("info", JSON.stringify(
            {
                "email": ultimoEmail, 
                "senha": ultimaSenha
            }
        ));
    }

    autoComplete() {
        if(window.localStorage.length > 0) {
            const {email:ultimoEmailDigitado, senha:ultimaSenhaDigitada} = JSON.parse(window.localStorage.getItem("info"));
            const email = document.querySelector("[data-email]");
            const senha = document.querySelector("[data-senha]");
            
            email.value = ultimoEmailDigitado;
            senha.value = ultimaSenhaDigitada;
        }
    }

    validaCadastro(senha, confirmaSenha) {
        if(senha.value !== confirmaSenha.value) {
            return false;
        }
        
        return true;
    }

    static async getSetDb(metodo, cadastro, tipoEntrada, id="") {
        let requisicao;
        const caminho = `http://localhost:3000/${tipoEntrada}/${id}`;
        
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
        }else if(metodo === "POST" || metodo === "PUT") {
            option = {
                method: `${metodo}`,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(cadastro)
            };
        }else if(metodo === "DELETE") {
            option = {
                method: `${metodo}`
            };
        }
        
        return option;
    }
}
