export class PessoaModel{
    constructor(pessoa){
        this._id = pessoa._id;
        this.Nome = pessoa.Nome;
        this.Sobrenome = pessoa.Sobrenome;
        this.Idade = pessoa.Idade;
        this.Sexo = pessoa.Sexo;
    }
}
