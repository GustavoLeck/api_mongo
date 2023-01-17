import { PessoaSchema } from "../schemas/pessoaSchema.js";

export class PessoaRepository{
    async postPessoa(req){
        return await new PessoaSchema.save().then(()=>{
        })
    } 

    async getAllPessoa(){           
        return await PessoaSchema.find();
    }

    async deletePessoa(id){
           return await PessoaSchema.findByIdAndDelete(id);

    } 

    async getPessoa(id){

            return await PessoaSchema.findById(id);
    }

    async updatePessoa(id, value){   
        return await PessoaSchema.findByIdAndUpdate(id, value);
    }
}