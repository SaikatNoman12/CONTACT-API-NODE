import express from "express";
import { currentUser, loginUser, registerUser } from "../controllers/userControllers.js";
import validateToken from "../middleware/validateTokenHandler.js";

// constant variable
const router = express.Router();

// api route
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

export default router;