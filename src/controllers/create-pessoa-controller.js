import { CreatePessoa } from "../use-cases/create-pessoa.js"

export class CreatePessoaController {
    async handle(req, res){

        console.log(`   =>Route used: [${req.method}] ${req.originalUrl}`);

        const pessoa = await new CreatePessoa().execute(req.body);

        if(pessoa.error){
            return res.status(500).send({message: "Erro interno do servidor."});
        }

        if(pessoa != null){
            return res.status(200).send(pessoa)
        }
    }
}