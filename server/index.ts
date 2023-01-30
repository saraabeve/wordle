import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { FetchWord } from "./services/GameLogic";
import { CheckGuessdWord } from "./services/GameLogic";
import { GetWordById } from "./services/GameLogic";

const app = express();
const port = 3333;
app.use(cors());

app.get("/word", (req: Request, res: Response) => {
  res.send(FetchWord());
});

app.get("/:wordIndex", (req: Request, res: Response) => {
  const id = Number(req.params.wordIndex);
  res.send(GetWordById(id));
});

app.get("/:word/:guess", (req: Request, res: Response) => {
  const wordIndex = Number(req.params.word);
  const guess = req.params.guess;
  res.send(CheckGuessdWord(wordIndex, guess));
});

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});
