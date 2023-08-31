"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_1 = require("./game");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/game", (req, res) => {
    const game = new game_1.Game();
    game.playTicTacToe();
    let winnerString;
    if (game.winner !== null) {
        winnerString = game.winner.symbol;
    }
    else {
        winnerString = "draw";
    }
    res.json({
        board: game.board.state,
        moves: game.moves,
        winner: winnerString,
    });
});
app.listen(3010, () => {
    console.log("App is listening on port 3010!");
});
