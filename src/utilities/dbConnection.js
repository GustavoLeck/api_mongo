import mongoose from 'mongoose';
import config from "config"

mongoose.set("strictQuery", true);

mongoose.Promise = global.Promise;

export async function startDB() {
  try {
    await mongoose.connect(config.database.mongoUrl)
  .then(() => console.log('=> DB Connected!'));
  } catch (error) {
    console.log("=> Erro ao conectar ao DB: "+error)
  }
}     
