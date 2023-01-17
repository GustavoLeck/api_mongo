import express from "express";
import { UpdatePessoaController } from "../controllers/update-pessoa-controller.js";

const router = express.Router();

router.put("/pessoa", new UpdatePessoaController().handle)

export default router;