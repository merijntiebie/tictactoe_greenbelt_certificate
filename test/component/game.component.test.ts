import { Game } from "../../src/game";

describe("When a new game is created", () => {
  it("it should initialize players and board correctly", () => {
    const game = new Game();

    expect(game.playerX.symbol).toEqual("X");
    expect(game.playerO.symbol).toEqual("O");
    expect(game.currentPlayer.symbol).toEqual("X");
    expect(game.board.state).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});

describe("Players should be able to take a turn, hereby placing their symbol on the board and switching the turn to the other player", () => {
  it("Player X at 0,0", () => {
    const game = new Game();
    game.takeTurn(0, 0);
    expect(game.board.state[0][0]).toEqual("X");
    expect(game.currentPlayer.symbol).toEqual("O");
    expect(game.lastMove).toEqual([0, 0]);
  });
  it("Player O at 1,1", () => {
    const game = new Game();
    game.takeTurn(0, 0);
    game.takeTurn(1, 1);
    expect(game.board.state[1][1]).toEqual("O");
    expect(game.currentPlayer.symbol).toEqual("X");
    expect(game.lastMove).toEqual([1, 1]);
  });
});
