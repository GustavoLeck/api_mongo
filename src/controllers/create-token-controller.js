import { CreateToken } from "../use-cases/create-token.js";

export class CreateTokenController{
    async handle(req, res){
        const token = await new CreateToken().execute(req.body);
        if(token.message){
            return res.status(token.status).send(token.message);
        }
        if(!token.errors){
            return res.status(200).send(token);
        }
    }
}