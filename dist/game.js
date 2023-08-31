"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const players_1 = require("./players");
const board_1 = require("./board");
const move_1 = require("./move");
class Game {
    constructor() {
        this.playerX = new players_1.Player("X");
        this.playerO = new players_1.Player("O");
        this.board = new board_1.Board();
        this.currentPlayer = this.playerX;
        this.lastMove = [-1, -1];
        this.winner = null;
        this.isFinished = false;
        this.moves = [];
    }
    switchTurns() {
        if (this.currentPlayer === this.playerX) {
            this.currentPlayer = this.playerO;
        }
        else {
            this.currentPlayer = this.playerX;
        }
    }
    setCurrentPlayer(player) {
        this.currentPlayer = player;
    }
    setLastMove(row, column) {
        this.lastMove = [row, column];
    }
    checkIfCurrentPlayerHasAVerticalWin() {
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
    checkIfCurrentPlayerHasAHorizontalWin() {
        const rowOfLastMove = this.lastMove[0];
        const extractedRow = this.board.state[rowOfLastMove];
        const symbolOfLastMove = this.currentPlayer.symbol;
        if (extractedRow?.some((symbol) => symbol !== symbolOfLastMove)) {
            return false;
        }
        return true;
    }
    checkIfCurrentPlayerHasADiagonalWin() {
        const symbolOfLastMove = this.currentPlayer.symbol;
        if (this.board.state[0][0] === symbolOfLastMove &&
            this.board.state[1][1] === symbolOfLastMove &&
            this.board.state[2][2] === symbolOfLastMove) {
            return true;
        }
        if (this.board.state[0][2] === symbolOfLastMove &&
            this.board.state[1][1] === symbolOfLastMove &&
            this.board.state[2][0] === symbolOfLastMove) {
            return true;
        }
        return false;
    }
    takeTurn(row, column) {
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
        const move = new move_1.Move(row, column, this.currentPlayer.symbol);
        this.moves.push(move);
        this.switchTurns();
    }
    checkIfCurrentPlayerHasWon() {
        return (this.checkIfCurrentPlayerHasADiagonalWin() ||
            this.checkIfCurrentPlayerHasAHorizontalWin() ||
            this.checkIfCurrentPlayerHasAVerticalWin());
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
            const randomEmptySpot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
            this.takeTurn(randomEmptySpot[0], randomEmptySpot[1]);
        }
    }
}
exports.Game = Game;
