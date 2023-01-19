import { PessoaRepository } from "../database/repository/pessoa-repository.js";
import { VerificaToken } from "../use-cases/verifica-token.js";

export class ReadPessoasController{
    async handle(req, res) {

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        const pessoas = await new PessoaRepository().getAllPessoa();
        return res.status(200).send(pessoas);
    }
}