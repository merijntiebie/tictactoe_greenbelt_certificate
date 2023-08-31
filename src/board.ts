export class Board {
  state: string[][];

  constructor() {
    this.state = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  setSymbol(row: number, column: number, symbol: string) {
    this.state[row][column] = symbol;
  }

  setBoardState(state: string[][]) {
    this.state = state;
  }

  getEmptySpots(): number[][] {
    const emptySpots: number[][] = [];
    this.state.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        if (column === "") {
          emptySpots.push([rowIndex, columnIndex]);
        }
      });
    });
    return emptySpots;
  }
}
