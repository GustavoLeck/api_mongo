import mongoose from 'mongoose';
import dotenv from "dotenv/config"

mongoose.set("strictQuery", true);

mongoose.Promise = global.Promise;

export async function startDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('=> DB Connected!'));
  } catch (error) {
    console.log("=> Erro ao conectar ao DB: "+error)
  }
}     
