import { CreatePessoa } from "../use-cases/create-pessoa.js"
import { PessoaRepository } from "../database/repository/pessoa-repository.js";
import { PessoaModel } from "../models/pessoa-model.js";

export class CreatePessoaController {
    async handle(req, res){

        const pessoa = await new CreatePessoa().execute(req.body);

        if(pessoa.message){
            return res.status(pessoa.status).send(pessoa.message);
        }

        const pessoaFormatted = new PessoaModel(req.body)

        const post = new PessoaRepository().postPessoa(pessoaFormatted);

        if(!post.error){
            return res.status(200).res.send({message:"Sucess"})
        }
    }
}