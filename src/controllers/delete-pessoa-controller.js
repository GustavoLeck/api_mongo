import { DeletePessoa } from "../use-cases/delete-pessoa.js";

export class DeletePessoaController{
    async handle(req, res){

        const pessoaValidate = await new DeletePessoa().execute(req.body);

        if (pessoaValidate.message) {
            return res.status(pessoaValidate.status).send(pessoaValidate.message);
        }
        if (pessoa != null) {
            return res.status(200).send({message:"Sucess"})
        }
    }
}