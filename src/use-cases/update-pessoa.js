import { PessoaModel } from "../models/pessoa-model.js";
import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class UpdatePessoa{
    async execute(pessoa){

        const PessoaValidated = new PessoaModel(pessoa);

        if (PessoaValidated.Nome == undefined) {
            delete PessoaValidated.Nome;
        }
        if (PessoaValidated.Sobrenome == undefined) {
            delete PessoaValidated.Sobrenome;
        }
        if (PessoaValidated.Idade == undefined) {
            delete PessoaValidated.Idade;
        }
        if (PessoaValidated.Sexo == undefined) {
            delete PessoaValidated.Sexo;
        }
        return await new PessoaRepository().updatePessoa(PessoaValidated);
    }
}