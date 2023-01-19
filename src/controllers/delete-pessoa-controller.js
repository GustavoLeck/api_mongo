import { DeletePessoa } from "../use-cases/delete-pessoa.js";
import { VerificaToken } from "../use-cases/verifica-token.js";

export class DeletePessoaController{
    async handle(req, res){

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        const pessoaValidate = await new DeletePessoa().execute(req.body);

        if (pessoaValidate.message) {
            return res.status(pessoaValidate.status).send(pessoaValidate.message);
        }
        if (!pessoaValidate.errors) {
            return res.status(200).send({message:"Sucess"})
        }
    }
}