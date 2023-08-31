"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor() {
        this.state = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
    }
    setSymbol(row, column, symbol) {
        this.state[row][column] = symbol;
    }
    setBoardState(state) {
        this.state = state;
    }
    getEmptySpots() {
        const emptySpots = [];
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
exports.Board = Board;
