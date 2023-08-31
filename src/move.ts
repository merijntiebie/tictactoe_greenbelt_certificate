export class Move {
  row: number;

  column: number;

  symbol: string;

  constructor(row: number, column: number, symbol: string) {
    this.row = row;
    this.column = column;
    this.symbol = symbol;
  }
}
