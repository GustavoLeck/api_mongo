import  Express from "express";
import { CreateTokenController } from "../controllers/create-token-controller.js";

const router = Express.Router();

router.post("/token",await new CreateTokenController().handle)

export default router;