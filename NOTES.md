Kata

✅ 1 – Player X won with a vertical line 
Player X: 
X| |  
-+-+- 
X|O|  
-+-+- 
X| |O 
 
PLAYER X WON! 

Component: game class creation
✅ new game -> players and board created

Component: making a turn
✅ - Player X plays on 0,0 -> board adjusted | current players is switched
✅ - Player Y plays on 1,1 -> board adjusted | current players is switched

Unit: changing a mark on the board
✅ - Player X plays on 0,0
✅ - Player O plays on 1,1

Unit: changing the players turn
✅ - current player is X, new current player is O
✅ - current player is O, new current player is X

Unit: checking vertical win
X| |  
-+-+- 
X|O|   --> Win ✅
-+-+- 
X| |O 

X| |  
-+-+- 
X|O|   --> No win ✅
-+-+- 
 | |O 
 
🙌 2 – Player O won with a horizontal line 
Player O: 
X| |X  
-+-+- 
O|O|O 
-+-+- 
X| | 
 
PLAYER O WON! 

Unit: checking horizontal win
X| |X
-+-+-
O|O|O --> Win ✅
-+-+-
X| | 

X| |X
-+-+-
O|O| --> No win ✅
-+-+-
X| |O 
 
3 – Player X won with a diagonal line 
Player X: 
X| |  
-+-+- 
O|X|  
-+-+- 
O| |X 
 
PLAYER X WON! 
 
4 – Game ends with a draw 
Player X: 
X|O|X  
-+-+- 
O|O|X 
-+-+- 
X|X|O 
 
GAME ENDS WITH A DRAW! 