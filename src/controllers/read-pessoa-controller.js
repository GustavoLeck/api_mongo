import { ReadPessoa } from "../use-cases/read-pessoa.js";
import { VerificaToken } from "../use-cases/verifica-token.js";

export class ReadPessoaController{
    async handle(req, res){

        const token = await new VerificaToken().execute(req.headers['auth-token'])

        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        const pessoa = await new ReadPessoa().execute(req.body);

        if(pessoa==null){
            return res.send(pessoa.status).send(pessoa.message);
        }
        if (!pessoa.errors) {
            return res.status(200).send(pessoa)
        }
    }
}