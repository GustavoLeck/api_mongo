import express from "express";
import { UpdatePessoaController } from "../controllers/update-pessoa-controller.js";
import { UpdatePessoaMiddleware } from "../middleware/update-pessoa-middleware.js";

const router = express.Router();

router.put("/pessoa", new UpdatePessoaMiddleware().handle, new UpdatePessoaController().handle)

export default router;