import { PessoaRepository } from "../database/repository/pessoa-repository.js";
import { UpdatePessoa } from "../use-cases/update-pessoa.js";
import { PessoaModel } from "../models/pessoa-model.js";

export class UpdatePessoaController{
    async handle(req, res){
        
        const pessoaValidada = await new UpdatePessoa().execute(req.body);

        if(pessoaValidada.message){
            return res.status(pessoaValidada.status).send(pessoaValidada.message)
        }

        const pessoaFormatted = await new PessoaModel(pessoaValidada);

        const update = await new PessoaRepository().updatePessoa(pessoaFormatted)

        if (!update.error) {
            return res.status(200).send({message:"Sucess"})
        }
    }
}