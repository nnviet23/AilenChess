import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { fen } = req.body;
  // TODO: gọi Stockfish hoặc phân tích
  return res.json({ bestMove: "e2e4", fen });
});

export default router;