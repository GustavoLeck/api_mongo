import { TokenRepository } from "../database/repository/token-repositoiry.js";

export class CreateToken{
    async execute(token){
        if(!token.Owner){
            return {
                message: "Erro ao registrar token, verifique o conteudo!",
                status: 422
            }
        }
        return await new TokenRepository().postToken(token);
    }
}