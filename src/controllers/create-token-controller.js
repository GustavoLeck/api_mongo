import { CreateToken } from "../use-cases/create-token.js";
import { VerificaToken } from "../use-cases/verifica-token.js";

export class CreateTokenController{
    async handle(req, res){

        console.log(`   =>Route used: [${req.method}] ${req.originalUrl}`);

        const Validate = await new VerificaToken().execute(req.headers['auth-token'])
        
        if (!Validate) {
            return res.status(200).send({message: "Auth error"});
        }
        
        const token = await new CreateToken().execute(req.body);
        if(token.message){
            return res.status(token.status).send(token.message);
        }
        if(!token.errors){
            return res.status(200).send(token);
        }
    }
}