import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class ReadPessoasController{
    async handle(req, res) {
        const pessoas = await new PessoaRepository().getAllPessoa();
        return res.status(200).send(pessoas);
    }
}