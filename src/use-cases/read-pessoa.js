import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class ReadPessoa{
    async execute(pessoa){
        if (!pessoa._id) {
            return{
                message: "Erro ao buscar registro, verifique o conteúdo!",
                status: 422
            }
        }
        return await new PessoaRepository().getPessoa(pessoa._id)
    }
}