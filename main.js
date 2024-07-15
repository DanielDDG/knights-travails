const edgeList = [];

function knightMoves([i, j], [l, m] = []) {
  if (i < 0 || j < 0 || i > 7 || j > 7) {
    return "The knight cannot be at this location.";
  } else if (i === l && j === m) {
    return [i, j];
  }

  const movesList = possibleMoves([i, j]);
  for (const move of movesList) {
    if (move[0] === l && move[1] === m) {
      return [[i, j], knightMoves([l, m], [5, 4])];
    }
  }
}

function possibleMoves([i, j]) {
  if (i + 2 < 8 && j + 1 < 8) {
    edgeList.push([i + 2, j + 1]);
  }

  if (i + 1 < 8 && j + 2 < 8) {
    edgeList.push([i + 1, j + 2]);
  }

  if (i + 2 < 8 && j - 1 > 0) {
    edgeList.push([i + 2, j - 1]);
  }

  if (i + 1 < 8 && j - 2 > 0) {
    edgeList.push([i + 1, j - 2]);
  }

  if (i - 2 > 0 && j - 1 > 0) {
    edgeList.push([i - 2, j - 1]);
  }

  if (i - 1 > 0 && j - 2 > 0) {
    edgeList.push([i - 1, j - 2]);
  }

  if (i - 2 > 0 && j + 1 < 8) {
    edgeList.push([i - 2, j + 1]);
  }

  if (i - 1 > 0 && j + 2 < 8) {
    edgeList.push([i - 1, j + 2]);
  }

  return edgeList;
}

console.log(knightMoves([3, 3], [5, 4]));
