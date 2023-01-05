
require('./schemas/pessoaSchema');
const mongoose = require('mongoose');
const pessoa = mongoose.model('Pessoa');

class pessoaModel{
    
    async postPessoa(req){

        try {
            await new pessoa(req.body).save().then(()=>{
                console.log("Registrado com sucesso.")
                return true;
            })
        } catch (error) {
            consolelog("Erro ao cadastrar pessoa: "+error);
            return false;
        }
    }  

    async getAllPessoa(){
        try {
            return await pessoa.find();
        } catch (error) {
            return error;
        } 
    }
    async deletePessoa(id){

        try {
            await pessoa.findByIdAndDelete(id);
            console.log("Registro excluido com sucesso.")
            return true;
        } catch (error) {
           console.log("Erro ao excluir registro.")
           return false;
        }

    }

    async getPessoa(id){

        try {  
            console.log("Registro selecionado com sucesso.")
            return await pessoa.findById(id);
        } catch (error) {
           console.log("Erro ao excluir registro.")
           return false;
        }

    }

    async updatePessoa(id, value){

        try {
            await pessoa.findByIdAndUpdate(id, value);
            console.log("Registro atualizado com sucesso.")
            return true;
        } catch (error) {
           console.log("Erro ao excluir registro.")
           return false;
        }

    }


}

module.exports = new pessoaModel();