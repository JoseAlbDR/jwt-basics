import express from "express";
import { login, dashboard } from "../controllers/main";
import authMiddleware from "../middleware/auth";
import validateLogin from "../middleware/joi-validation";
const router = express.Router();

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(validateLogin, login);

export default router;
