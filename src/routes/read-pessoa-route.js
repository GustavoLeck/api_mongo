import express from "express";
import { ReadPessoaController } from "../controllers/read-pessoa-controller.js";
import { ReadPessoaMiddleware } from "../middleware/read-pessoa-middleware.js";

const router = express.Router();

router.get("/pessoa", new ReadPessoaMiddleware().handle , new ReadPessoaController().handle)

export default router;