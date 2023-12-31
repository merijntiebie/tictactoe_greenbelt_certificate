import { Player } from "./players";
import { Board } from "./board";
import { Move } from "./move";

export class Game {
  playerX: Player;

  playerO: Player;

  currentPlayer: Player;

  board: Board;

  lastMove: number[];

  winner: string | null;

  isFinished: boolean;

  moves: Move[];

  constructor() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
    this.currentPlayer = this.playerX;
    this.lastMove = [-1, -1];
    this.winner = null;
    this.isFinished = false;
    this.moves = [];
  }

  switchTurns() {
    if (this.currentPlayer === this.playerX) {
      this.currentPlayer = this.playerO;
    } else {
      this.currentPlayer = this.playerX;
    }
  }

  setCurrentPlayer(player: Player) {
    this.currentPlayer = player;
  }

  checkIfCurrentPlayerHasAVerticalWin(): boolean {
    const columnOfLastMove = this.lastMove[1];
    const symbolOfLastMove = this.currentPlayer.symbol;

    let verticalWin = true;
    for (let row = 0; row < 3; row += 1) {
      if (this.board.state[row][columnOfLastMove] !== symbolOfLastMove) {
        verticalWin = false;
      }
    }
    return verticalWin;
  }

  checkIfCurrentPlayerHasAHorizontalWin(): boolean {
    const rowOfLastMove = this.lastMove[0];
    const extractedRow = this.board.state[rowOfLastMove];
    const symbolOfLastMove = this.currentPlayer.symbol;
    if (extractedRow?.some((symbol) => symbol !== symbolOfLastMove)) {
      return false;
    }
    return true;
  }

  checkIfCurrentPlayerHasADiagonalWin(): boolean {
    const symbolOfLastMove = this.currentPlayer.symbol;
    if (
      this.board.state[0][0] === symbolOfLastMove &&
      this.board.state[1][1] === symbolOfLastMove &&
      this.board.state[2][2] === symbolOfLastMove
    ) {
      return true;
    }
    if (
      this.board.state[0][2] === symbolOfLastMove &&
      this.board.state[1][1] === symbolOfLastMove &&
      this.board.state[2][0] === symbolOfLastMove
    ) {
      return true;
    }
    return false;
  }

  takeTurn(row: number, column: number) {
    this.board.setSymbol(row, column, this.currentPlayer.symbol);
    this.lastMove = [row, column];
    if (this.checkIfCurrentPlayerHasWon() === true) {
      this.winner = this.currentPlayer.symbol;
    }
    if (this.checkIfGameHasEnded() === true) {
      this.isFinished = true;
    }
    if (this.checkIfGameHasEndedWithDraw() === true) {
      this.winner = "draw";
    }
    const move = new Move(row, column, this.currentPlayer.symbol);
    this.moves.push(move);
    this.switchTurns();
  }

  private checkIfCurrentPlayerHasWon() {
    return (
      this.checkIfCurrentPlayerHasADiagonalWin() ||
      this.checkIfCurrentPlayerHasAHorizontalWin() ||
      this.checkIfCurrentPlayerHasAVerticalWin()
    );
  }

  checkIfGameHasEnded() {
    if (this.winner !== null || this.board.getEmptySpots().length === 0) {
      return true;
    }
    return false;
  }

  checkIfGameHasEndedWithDraw() {
    if (this.winner === null && this.board.getEmptySpots().length === 0) {
      return true;
    }
    return false;
  }

  playTicTacToe() {
    while (this.isFinished === false) {
      const emptySpots = this.board.getEmptySpots();
      const randomEmptySpot =
        emptySpots[Math.floor(Math.random() * emptySpots.length)];
      this.takeTurn(randomEmptySpot[0], randomEmptySpot[1]);
    }
  }
}
