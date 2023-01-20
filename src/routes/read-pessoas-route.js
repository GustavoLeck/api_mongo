import express from 'express'
import { ReadPessoasController } from "../controllers/read-pessoas-controller.js";
import { ReadPessoasMiddleware } from "../middleware/read-pessoas-middleware.js";

const router = express.Router();

router.get('/pessoas', new ReadPessoasMiddleware().handle, new ReadPessoasController().handle);

export default router;