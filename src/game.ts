import { Player } from "./players";
import { Board } from "./board";

export class Game {
  playerX: Player;

  playerO: Player;

  currentPlayer: Player;

  board: Board;

  lastMove: number[];

  winner: Player | null;

  isFinished: boolean;

  constructor() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
    this.currentPlayer = this.playerX;
    this.lastMove = [-1, -1];
    this.winner = null;
    this.isFinished = false;
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

  setLastMove(row: number, column: number) {
    this.lastMove = [row, column];
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
    if (this.checkIfCurrentPlayerHasAVerticalWin() === true) {
      this.winner = this.currentPlayer;
    }
    if (this.checkIfCurrentPlayerHasAHorizontalWin() === true) {
      this.winner = this.currentPlayer;
    }
    if (this.checkIfCurrentPlayerHasADiagonalWin() === true) {
      this.winner = this.currentPlayer;
    }
    this.switchTurns();
  }
}
