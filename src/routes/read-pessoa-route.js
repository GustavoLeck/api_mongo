import express from "express";
import { ReadPessoaController } from "../controllers/read-pessoa-controller.js";

const router = express.Router();

router.get("/pessoa", new ReadPessoaController().handle)

export default router;