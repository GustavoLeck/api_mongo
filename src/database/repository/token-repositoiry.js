import { Token } from "../schemas/token-schema.js";

export class TokenRepository{
    async getToken(token){
        return await Token.findById(token);
    }
    async postToken(token){
        return await Token.create(token);
    }
}