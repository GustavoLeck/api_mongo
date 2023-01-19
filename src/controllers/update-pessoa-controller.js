import { UpdatePessoa } from "../use-cases/update-pessoa.js";
import { VerificaToken } from "../use-cases/verifica-token.js";

export class UpdatePessoaController {
    async handle(req, res) {

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }
        const pessoaValidada = await new UpdatePessoa().execute(req.body);
        
        if (pessoaValidada.message) {
            return res.status(pessoaValidada.status).send(pessoaValidada.message);
        }
        if (!pessoaValidada.errors) {
            return res.status(200).send(pessoaValidada);
        }   
    }
}