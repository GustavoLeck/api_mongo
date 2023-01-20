import { PessoaRepository } from "../database/repository/pessoa-repository.js";
import { PessoaModel } from "../models/pessoa-model.js";

export class CreatePessoa {
    async execute(pessoa){

        const PessoaValidated = await new PessoaModel(pessoa);

        if (PessoaValidated._id == undefined) {
            delete PessoaValidated._id;
        }
        
        return await new PessoaRepository().postPessoa(PessoaValidated);
    }
}