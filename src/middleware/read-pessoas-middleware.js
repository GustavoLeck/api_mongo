import { VerificaToken } from "../use-cases/verifica-token.js";

export class ReadPessoasMiddleware{
    async handle(req, res, next){
        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }
        next()
    }
}