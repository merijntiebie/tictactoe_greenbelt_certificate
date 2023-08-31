import { loadFeature, defineFeature } from "jest-cucumber";
import { Game } from "../../src/game";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Player X wins with a vertical win", ({ given, and, when, then }) => {
    let game: Game;

    given("a game of TicTacToe", () => {
      game = new Game();
    });

    and("player X and player O compete for the win", () => {
      expect(game.playerX.symbol).toEqual("X");
      expect(game.playerO.symbol).toEqual("O");
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    when(/^player X places its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    then("player X wins", () => {
      expect(game.winner).toBe("X");
      expect(game.isFinished).toBe(true);
    });
  });

  test("Player O wins with a horizontal win", ({ given, and, when, then }) => {
    let game: Game;

    given("a game of TicTacToe", () => {
      game = new Game();
    });
    and("player X and player O compete for the win", () => {
      expect(game.playerX.symbol).toEqual("X");
      expect(game.playerO.symbol).toEqual("O");
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    when(/^player O places its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    then("player O wins", () => {
      expect(game.winner).toEqual("O");
      expect(game.isFinished).toEqual(true);
    });
  });

  test("Player X wins with a diagonal win", ({ given, and, when, then }) => {
    let game: Game;
    given("a game of TicTacToe", () => {
      game = new Game();
    });

    and("player X and player O compete for the win", () => {
      expect(game.playerX.symbol).toEqual("X");
      expect(game.playerO.symbol).toEqual("O");
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    when(/^player X places its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    then("player X wins", () => {
      expect(game.winner).toEqual("X");
      expect(game.isFinished).toEqual(true);
    });
  });
  test("Game ends in a draw", ({ given, and, when, then }) => {
    let game: Game;
    given("a game of TicTacToe", () => {
      game = new Game();
    });

    and("player X and player O compete for the win", () => {
      expect(game.playerX.symbol).toEqual("X");
      expect(game.playerO.symbol).toEqual("O");
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    when(/^player X places its mark at (\d+),(\d+)$/, (row, column) => {
      game.takeTurn(parseInt(row), parseInt(column));
    });

    then("the game ends in a draw", () => {
      expect(game.winner).toEqual("draw");
      expect(game.isFinished).toEqual(true);
    });
  });
});
