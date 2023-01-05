const { Router } = require('express');
const routes = Router();
const controller = require('../controllers/pessoaController')

routes.get('/health', (req, res) => {

    res.status(200).json({"message": "Servidor ON"})
    console.log("/health [GET] utilizado")
})

routes.post('/pessoa', controller.postPessoa);
routes.get('/pessoas', controller.getAllPessoa);


module.exports = routes;