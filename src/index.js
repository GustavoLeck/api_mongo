const express = require('express');
const app = express();
const routePessoa = require ('./routes/pessoaRoute')
const startDB = require('../config/dbConnection')


console.clear();

startDB();

app.use(express.json());
app.use(routePessoa);

/* parametrizar a porta de escuta */
app.listen(3000, () => {
	console.log('-- Server ON --');
})

  