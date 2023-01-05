const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const pessoa = new Schema({
    Id: ObjectId,   
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
})
mongoose.model('Pessoa', pessoa);

    
