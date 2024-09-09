import express from "express";
import cors from "cors";
import corsOptions from "@/config/cors";
import boardRouter from "@/routers/boardRouter";
import columnRouter from "@/routers/columnRouter";
import cardRouter from "@/routers/cardRouter";
import errorHandlingMiddleware from "@/middlewares/errorHandlingMiddleware";
import { RUN_DB } from "./config/mongodb";

const hostname = "localhost";
const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandlingMiddleware);
app.use("/board", boardRouter);
app.use("/column", columnRouter);
app.use("/card", cardRouter);

app.listen(port, hostname, async () => {
  await RUN_DB();
  console.log(`Running at http://${hostname}:${port}`);
});
