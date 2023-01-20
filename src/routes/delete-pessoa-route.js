import express from "express";
import { DeletePessoaController } from "../controllers/delete-pessoa-controller.js";
import { DeletePessoaMiddleware } from "../middleware/delete-pessoa-middleware.js";

const router = express.Router();

router.delete("/pessoa", new DeletePessoaMiddleware().handle, new DeletePessoaController().handle);

export default router;