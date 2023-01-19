import express from "express";
import { CreatePessoaController } from "../controllers/create-pessoa-controller.js";

const router = express.Router();

router.post('/pessoa', new CreatePessoaController().handle);

export default router;