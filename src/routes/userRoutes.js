import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/LoginRequired";
const router = new Router();

router.get("/", loginRequired, userController.index);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
