import express from "express";
import { CreatePessoaController } from "../controllers/create-pessoa-controller.js";

const router = express.Router();

router.post(
    '/createpessoa',
    new CreatePessoaController().handle
);

export default router;