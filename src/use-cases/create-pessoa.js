import { PessoaRepository } from "../database/repository/pessoa-repository.js";
import { PessoaModel } from "../models/pessoa-model.js";

export class CreatePessoa {
    async execute(pessoa){
        if(!pessoa.Nome){
            return {
                message: "Erro ao inserir registro, verifique o conteudo 2.",
                status: 422
            }
        }
        if(!pessoa.Sobrenome){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if(!pessoa.Idade){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if(!pessoa.Sexo){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if (pessoa._id){
            delete pessoa._id;
        }
        if (typeof pessoa.Idade != "number") {
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 400
            }
        }

        const PessoaValidated = await new PessoaModel(pessoa);

        if (PessoaValidated._id == undefined) {
            delete PessoaValidated._id;
        }
        return await new PessoaRepository().postPessoa(PessoaValidated);
    }
}