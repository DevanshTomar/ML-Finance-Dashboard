import express from "express";
const router = express.Router();
import KP from "../models/KP.js";

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KP.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

export default router;
