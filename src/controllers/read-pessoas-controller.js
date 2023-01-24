import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class ReadPessoasController{
    async handle(req, res) {

        console.log(`   =>Route used: [${req.method}] ${req.originalUrl}`);

        const pessoas = await new PessoaRepository().getAllPessoa();

        if(pessoas.error){
            return res.status(500).send({message: "Erro Interno do servidor."})
        }

        if (pessoas != null) {
            return res.status(200).send(pessoas);
        }
        
    }
}