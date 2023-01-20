import { VerificaToken } from "../use-cases/verifica-token.js";

export class ReadPessoaMiddleware{
    async handle(req, res, next){

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        if (!req.body._id) {
            return res.status(422).send({
                message: "Erro ao buscar registro, verifique o conteúdo!"
            })
        }

        next();
    }
}