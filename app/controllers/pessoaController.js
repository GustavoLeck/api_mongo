const pessoalModel = require('../models/pessoalModel');
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
        res.status(400).json({"message": "Erro ao registrar pessoa."})
       }

       console.log("    => Route used: ["+req.method+"] '"+req.originalUrl+"'")  
    }

    async getAllPessoa(req, res){
        res.status(200).json({
            "message": "Sucess",
            "values": await  modelPessoa.getAllPessoa()
        });

        console.log("    => Route used: ["+req.method+"] '"+req.originalUrl+"'")  
       
    }
    async deletePessoa(req, res){

      if(await modelPessoa.deletePessoa(req.body.id)){
        res.status(200).json({
            "message": "Deletado com sucesso.",
            "values": req.body
        });
       }else{
        res.status(400).json({"message": "Erro ao deletar pessoa."})
       }
       console.log("    => Route used: ["+req.method+"] '"+req.originalUrl+"'")  
    }

    async getPessoa(req, res){
        res.status(200).json({
            "message": "Sucess",
            "values": await  modelPessoa.getPessoa(req.body.id)
        });
        console.log("    => Route used: ["+req.method+"] '"+req.originalUrl+"'") 
    }

    async updatePessoa(req, res){

        if(await modelPessoa.updatePessoa(req.body.id, req.body)){
          res.status(200).json({
              "message": "Atualizado com sucesso.",
              "values": req.body
          });
         }else{
          res.status(400).json({"message": "Erro ao atualizar pessoa."})
         }
         console.log("    => Route used: ["+req.method+"] '"+req.originalUrl+"'")  
      }
    

}

module.exports = new controllerPessoa();