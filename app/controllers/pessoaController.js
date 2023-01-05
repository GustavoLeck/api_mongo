const modelPessoa = require('../models/pessoalModel')

class controllerPessoa{

    async postPessoa(req, res){

        if(!req.body.Nome){
            res.status(400).json({"message": "Erro ao inserir registro, verifique o conteudo."}); 
        }

        if(!req.body.Sobrenome){
            res.status(400).json({"message": "Erro ao inserir registro, verifique o conteudo."}); 
        }

        if(!req.body.Idade){
            res.status(400).json({"message": "Erro ao inserir registro, verifique o conteudo."}); 
        }

        if(!req.body.Sexo){
            res.status(400).json({"message": "Erro ao inserir registro, verifique o conteudo."}); 
        }
        
       if(modelPessoa.postPessoa(req)){
        res.status(200).json({
            "message": "Inserido com sucesso.",
            "values": req.body
        });
       }else{
        res.status(400).json({"message": "Erro ao registrar."})
       }
    }

    async getAllPessoa(req, res){
        const resposta = modelPessoa.getAllPessoa();
        console.log("Teste")
        // res.status(200).json({"values" : modelPessoa.getAllPessoa()});
    }
}

module.exports = new controllerPessoa();