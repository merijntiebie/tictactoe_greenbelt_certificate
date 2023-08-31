import { Board } from "../../src/board";

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
