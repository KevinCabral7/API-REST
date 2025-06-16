import { Router } from "express";
import mediaController from "../controllers/MediaController";
import loginRequired from "../middlewares/LoginRequired";

const router = new Router();

router.post("/", loginRequired, mediaController.store);

export default router;
