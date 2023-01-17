import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class ReadPessoasController{
    async handle(req, res) {
        const pessoas = await new PessoaRepository().getAllPessoa();
        res.send(pessoas);
    }
}