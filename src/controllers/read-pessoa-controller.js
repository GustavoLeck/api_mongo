import { ReadPessoa } from "../use-cases/read-pessoa.js";

export class ReadPessoaController{
    async handle(req, res){

        console.log(`   =>Route used: [${req.method}] ${req.originalUrl}`);

        const pessoa = await new ReadPessoa().execute(req.body);

        if(pessoa==null){
            return res.send(pessoa.status).send(pessoa.message);
        }
        if (!pessoa.errors) {
            return res.status(200).send(pessoa)
        }
    }
}