import express from "express";
import { geminiEmoji } from "../controllers/gemini-controller.js";
const router = express.Router();

router.route("/emoji").post(geminiEmoji);

export default router;
