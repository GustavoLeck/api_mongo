import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class DeletePessoa{
    async execute(pessoa){  
        return await new PessoaRepository().deletePessoa(pessoa._id);
    }
}

