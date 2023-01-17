import mongoose from 'mongoose';

mongoose.set("strictQuery", true);

mongoose.Promise = global.Promise;

export async function startDB() {
  try {
    await mongoose.connect("mongodb+srv://Bot:Super_Senha481526@cluster0.sgfic.mongodb.net/test")
  .then(() => console.log('=> DB Connected!'));
  } catch (error) {
    console.log("=> Erro ao conectar ao DB: "+error)
  }
}     
