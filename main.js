// Helper function that creates a node including the position and path.
function Node(pos, path) {
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return null;
  }

  return { pos, path };
}

// knightMoves([0, 0], [3, 3]);
function knightMoves(start, target) {
  const queue = [Node(start, [start])];
  let currentNode = queue.shift();

  while (currentNode.pos[0] !== target[0] || currentNode.pos[1] !== target[1]) {
    let moves = [
      [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
    ];

    moves.forEach((move) => {
      const node = Node(move, currentNode.path.concat([move]));
      if (node) {
        queue.push(node);
      }
    });

    currentNode = queue.shift();
  }

  console.log(
    `You made it in ${currentNode.path.length - 1} moves! Here's your path:`
  );

  currentNode.path.forEach((pos) => {
    console.log(pos);
  });
}

knightMoves([0, 0], [7, 7]);
