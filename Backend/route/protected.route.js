import express from "express";
import { authenticateJWT } from "../middleware/auth.js"; 

const router = express.Router();

router.get("/", authenticateJWT, (req, res) => {
  res.json({ message: "Welcome to the protected dashboard!", user: req.user });
});

export default router;
