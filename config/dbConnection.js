require("dotenv").config();

const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

mongoose.Promise = global.Promise;

async function startDB() {
  try {
    await mongoose.connect(process.env.DB_URL)
  .then(() => console.log('=> DB Connected!'));
  } catch (error) {
    console.log("=> Erro ao conectar ao DB: "+error)
  }
}
    
module.exports = startDB;
     
