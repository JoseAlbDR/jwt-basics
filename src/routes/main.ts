import express from "express";
import { login, dashboard } from "../controllers/main";
const router = express.Router();

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

export default router;
