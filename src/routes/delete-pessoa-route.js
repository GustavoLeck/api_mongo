import express from "express";
import { DeletePessoaController } from "../controllers/delete-pessoa-controller.js";

const router = express.Router();

router.delete("/pessoa", new DeletePessoaController().handle);

export default router;