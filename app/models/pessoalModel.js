
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
            return error;
        }
    }  

    async getAllPessoa(){
        try {
            console.log
        } catch (error) {
            // console.log(error);
            return error;
        } 
    }
}

module.exports = new pessoaModel();