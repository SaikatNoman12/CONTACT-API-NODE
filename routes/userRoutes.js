import express from "express";
import { currentUser, loginUser, registerUser } from "../controllers/userControllers.js";

// constant variable
const router = express.Router();

// api route
router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/current", currentUser);

export default router;