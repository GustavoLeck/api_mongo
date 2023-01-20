import { VerificaToken } from "../use-cases/verifica-token.js";

export class UpdatePessoaMiddleware{
    async handle(req, res, next){

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        if (!req.body._id) {
            return res.status(422).send({
                message: "Erro ao inserir registro, verifique o conteudo."
            })
        }
    }
}