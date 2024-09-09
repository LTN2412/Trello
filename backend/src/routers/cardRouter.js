import cardController from "@/controllers/cardController";
import express from "express";

const router = express.Router();

router.post("/create", cardController.createNewCard);

router.post("/update", cardController.updateCard);

export default router;
