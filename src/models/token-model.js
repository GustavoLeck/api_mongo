export class TokenModel{
    constructor(token){
        this.Token = token._id;
        this.Owner = token.Owner; 
    }
}