import express from "express";
import { adminLogin, getMessages } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/messages", protect, getMessages);

export default router;
