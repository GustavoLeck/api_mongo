import { PessoaSchema } from "../schemas/pessoaSchema.js";

export class PessoaRepository{
    async postPessoa(pessoa){
        return await PessoaSchema.create(pessoa)
    } 

    async getAllPessoa(){           
        return await PessoaSchema.find();
    }

    async deletePessoa(pessoa){
        return await PessoaSchema.findByIdAndDelete(pessoa);
    } 

    async getPessoa(id){
        return await PessoaSchema.findById(id);
    }

    async updatePessoa(pessoa){   
        return await PessoaSchema.findByIdAndUpdate(pessoa._id, pessoa);
    }
}