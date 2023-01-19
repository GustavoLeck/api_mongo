import { CreatePessoa } from "../use-cases/create-pessoa.js"

export class CreatePessoaController {
    async handle(req, res){

        const pessoa = await new CreatePessoa().execute(req.body);

        if(pessoa.message){
            return res.status(pessoa.status).send(pessoa.message);
        }

        if(!pessoa.error){
            return res.status(200).send(pessoa)
        }
    }
}