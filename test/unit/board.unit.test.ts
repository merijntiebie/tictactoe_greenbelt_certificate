import { Board } from "../../src/board";
import {
  boardStateDraw,
  boardStateWithAlmostDiagonalWinForX,
} from "../doubles/board.state";

describe("It should be possible to change the cell on the board to the symbol of a player. The cells are referred to by their row and column respectively.", () => {
  it("X at 0,0", () => {
    const board = new Board();
    board.setSymbol(0, 0, "X");
    expect(board.state[0][0]).toEqual("X");
  });
  it("Y at 1,1", () => {
    const board = new Board();
    board.setSymbol(1, 1, "Y");
    expect(board.state[1][1]).toEqual("Y");
  });
});

describe("To know where a player can play its symbol, we need to keep track of the empty spots on the board.", () => {
  it("The board is empty at the start of the game", () => {
    const board = new Board();
    expect(board.getEmptySpots()).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });
  it("Some cells on the board are taken after a couple of turns ", () => {
    const board = new Board();
    board.setBoardState(boardStateWithAlmostDiagonalWinForX);
    expect(board.getEmptySpots()).toEqual([
      [0, 1],
      [0, 2],
      [2, 1],
      [2, 2],
    ]);
  });
  it("There are no empty cells left when all are marked by a symbol", () => {
    const board = new Board();
    board.setBoardState(boardStateDraw);
    expect(board.getEmptySpots()).toEqual([]);
  });
});
