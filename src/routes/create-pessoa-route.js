import express from "express";
import { CreatePessoaController } from "../controllers/create-pessoa-controller.js";
import { CreatePessoaMiddleware } from "../middleware/create-pessoa-middleware.js"

const router = express.Router();

router.post('/pessoa', new CreatePessoaMiddleware().handle, new CreatePessoaController().handle);

export default router;