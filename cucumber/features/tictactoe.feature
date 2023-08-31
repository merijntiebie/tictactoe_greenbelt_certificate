Feature: TicTacToe

Scenario: Player X wins with a vertical win
	Given a game of TicTacToe
	And player X and player O compete for the win
	And player X has placed its mark at 0,0
	And player O has placed its mark at 1,1
	And player X has placed its mark at 1,0
	And player O has placed its mark at 2,2
	When player X places its mark at 2,0
	Then player X wins

Scenario: Player O wins with a horizontal win
	Given a game of TicTacToe
	And player X and player O compete for the win
	And player X has placed its mark at 0,0
	And player O has placed its mark at 1,0
	And player X has placed its mark at 2,0
	And player O has placed its mark at 1,1
	And player X has placed its mark at 0,2
	When player O places its mark at 1,2
	Then player O wins