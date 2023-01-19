
import { UpdatePessoa } from "../use-cases/update-pessoa.js";

export class UpdatePessoaController {
    async handle(req, res) {
        const pessoaValidada = await new UpdatePessoa().execute(req.body);
        
        if (pessoaValidada.message) {
            return res.status(pessoaValidada.status).send(pessoaValidada.message);
        }
        if (!pessoaValidada.errors) {
            return res.status(200).send(pessoaValidada);
        }
        
    }
}