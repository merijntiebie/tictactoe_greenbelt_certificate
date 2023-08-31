import express, { Request, Response } from "express";
import { Game } from "./game";

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.post("/game", (req: Request, res: Response) => {
  const game = new Game();
  game.playTicTacToe();

  res.json({
    board: game.board.state,
    moves: game.moves,
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
