import mongoose from "mongoose";

const token = new mongoose.Schema({
   Id: mongoose.Schema.ObjectId, 
   Owner: {
    type: 'String',
    require: true
   }
})

export const Token = mongoose.model('Token', token);