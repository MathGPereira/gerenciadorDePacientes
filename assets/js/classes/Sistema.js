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

    async getCadastro(id, cadastro, tipoCadastro) {
        const BancoDeDados = await Sistema.getSetDb("GET", cadastro, tipoCadastro);

        if(JSON.stringify(BancoDeDados).includes(`"id":${id}`)) {
            BancoDeDados.forEach(pessoaCadastrada => {
                if(pessoaCadastrada.id === id && tipoCadastro === "paciente") {
                    const {id, nome, sobrenome, idade, sexo, tratamento, consulta} = pessoaCadastrada;
                }else if(pessoaCadastrada.id === tipoInformacao && tipoCadastro === "medico") {
                    const {id, nome, sobrenome, email} = pessoaCadastrada;
                    nomeDoMedico = nome;
                    console.log(nomeDoMedico)
                }
            });
        }else {
            console.log("Não há nenhum paciente com este id cadastrado");
        }

        
        return nomeDoMedico;
    }

    async setCache(email) {
        await Sistema.getSetDb("POST", {email}, "cache");
    }

    async getCache() {
        let nomeDoMedico;
        const [pessoaLogada] = await Sistema.getSetDb("GET", null, "cache");
        const [medicosCadastrados] = [await Sistema.getSetDb("GET", null, "medico")];
        const email = pessoaLogada.email;

        medicosCadastrados.forEach((medico, indice) => {
            if(medico.email === email) {
                nomeDoMedico = medicosCadastrados[indice].nome;
            }
        });
        
        return [nomeDoMedico, pessoaLogada];        
    }

    async validaLogin(emailDigitado, senhaDigitada) {
        let boolean;
        const resposta = await Sistema.getSetDb("GET", null, "medico");

        resposta.map(cadastro => {
            if(cadastro.email === emailDigitado && cadastro.senha === senhaDigitada) {
                boolean = true;
            }else {
                boolean = false;
            }
        });

        return boolean;
    }

    async mudaSenha(senha) {
        const objetoSenha = {"senha": parseInt(senha)};
        
        await Sistema.getSetDb("PUT", objetoSenha, "medico");
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
        }else if(metodo === "POST" || metodo === "PUT") {
            option = {
                method: `${metodo}`,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(cadastro)
            };
        }
        
        return option;
    }
}
