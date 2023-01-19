import { TokenModel } from "../models/token-model.js";
import { TokenRepository } from "../database/repository/token-repositoiry.js";

export class VerificaToken{
    async execute(token){

        if(token == undefined){
            return false;
        }

        const TokenValidate = await new TokenRepository().getToken(token);

        if (TokenValidate == null) {
            return false;
        }
        if(TokenValidate.Owner){
        return new TokenModel(TokenValidate);
        }
    }
} 