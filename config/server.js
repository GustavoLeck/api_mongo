const express = require('express');
const app = express();
const routePessoa = require ('../app/routes/pessoaRoute')

app.use(express.json());
app.use(routePessoa);

module.exports = app;