import columnController from "@/controllers/columnController";
import express from "express";

const router = express.Router();

router.post("/create", columnController.createColumn);
router.post("/dnd", columnController.dndCard);

export default router;
