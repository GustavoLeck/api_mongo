import mongoose from "mongoose";

const pessoa = new mongoose.Schema({
    Id: mongoose.Schema.ObjectId,   
    Nome: {
        type: 'String',
        require: true
    },
    Sobrenome:{
        type: 'String',
        require: true
    },
    Idade:{
        type: 'Number',
        require: true
    },
    Sexo:{
        type: 'String',
        require: true
    }
});

export const PessoaSchema = mongoose.model('Pessoa', pessoa);

    
