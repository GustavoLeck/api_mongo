import { CreatePessoa } from "../use-cases/create-pessoa.js"
import { VerificaToken } from "../use-cases/verifica-token.js";

export class CreatePessoaController {
    async handle(req, res){

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        const pessoa = await new CreatePessoa().execute(req.body);

        if(pessoa.message){
            return res.status(pessoa.status).send(pessoa.message);
        }

        if(!pessoa.error){
            return res.status(200).send(pessoa)
        }
    }
}