import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class ReadPessoa{
    async execute(pessoa){
        return await new PessoaRepository().getPessoa(pessoa._id)
    }
}