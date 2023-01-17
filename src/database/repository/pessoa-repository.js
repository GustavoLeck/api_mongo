import { PessoaSchema } from "../schemas/pessoaSchema.js";

export class PessoaRepository{
    async postPessoa(pessoa){
        return await new PessoaSchema.save(pessoa).then(()=>{
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

    async updatePessoa(pessoa){   
        return await PessoaSchema.findByIdAndUpdate(pessoa._id, pessoa);
    }
}