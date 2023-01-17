import express from 'express'
import { ReadPessoasController } from "../controllers/read-pessoas-controller.js";

const router = express.Router();

router.get('/pessoas', new ReadPessoasController().handle);

export default router;