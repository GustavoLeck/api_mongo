import { VerificaToken } from "../use-cases/verifica-token.js";

export class CreatePessoaMiddleware{
    async handle(req, res, next){

        const token = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!token) {
            return res.status(200).send({message: "Auth error"});
        }

        if(!req.body.Nome){
            return res.status(422).send({
                message: "Erro ao inserir registro, verifique o conteudo.",
            })
        }
        if(!req.body.Sobrenome){
            return res.status(422).send({
                message: "Erro ao inserir registro, verifique o conteudo.",
            })
        }
        if(!req.body.Idade){
            return res.status(422).send({
                message: "Erro ao inserir registro, verifique o conteudo.",
            })
        }
        if(!req.body.Sexo){
            return res.status(422).send({
                message: "Erro ao inserir registro, verifique o conteudo.",
            })
        }
        if (req.body._id){
            delete req.body._id;
        }
        if (typeof req.body.Idade != "number") {
            return res.status(400).send({
                message: "Erro ao inserir registro, verifique o conteudo.",
            })
        }
        next();
    }
}