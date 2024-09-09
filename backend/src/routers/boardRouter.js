import express from "express";
import boardValidation from "@/validations/boardValidation";
import boardController from "@/controllers/boardController";

const router = express.Router();

router.post(
  "/create",
  boardValidation.checkBoard,
  boardController.createNewBoard
);
router.get("/:id", boardController.getBoard);
router.post("/dnd", boardController.dndColumn);

export default router;
