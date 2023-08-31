export const boardStateWithVerticalWinForX = [
  ["X", "", ""],
  ["X", "O", ""],
  ["X", "", "O"],
];

export const boardStateWithAlmostVerticalWinForX = [
  ["X", "", ""],
  ["X", "O", "X"],
  ["", "", "O"],
];

export const boardStateWithAlmostHorizontalWinForO = [
  ["X", "", "X"],
  ["O", "O", ""],
  ["X", "", "O"],
];

export const boardStateWithHorizontalWinForO = [
  ["X", "", "X"],
  ["O", "O", "O"],
  ["X", "", ""],
];

export const boardStateWithAlmostDiagonalWinForX = [
  ["X", "", ""],
  ["O", "X", "X"],
  ["O", "", ""],
];

export const boardStateWithDiagonalWinForXFromTopLeft = [
  ["X", "", ""],
  ["O", "X", ""],
  ["O", "", "X"],
];

export const boardStateWithDiagonalWinForXFromTopRight = [
  ["", "", "X"],
  ["O", "X", ""],
  ["X", "", "O"],
];

export const boardStateDraw = [
  ["X", "O", "X"],
  ["O", "O", "X"],
  ["X", "X", "O"],
];
