export function solve(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let islands = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] !== "1" || visited[row][col]) {
        continue;
      }

      islands += 1;
      const queue: Array<[number, number]> = [[row, col]];
      visited[row][col] = true;
      let head = 0;

      while (head < queue.length) {
        const [currentRow, currentCol] = queue[head];
        head += 1;

        for (const [rowDelta, colDelta] of directions) {
          const nextRow = currentRow + rowDelta;
          const nextCol = currentCol + colDelta;

          if (
            nextRow < 0 ||
            nextRow >= rows ||
            nextCol < 0 ||
            nextCol >= cols ||
            visited[nextRow][nextCol] ||
            grid[nextRow][nextCol] !== "1"
          ) {
            continue;
          }

          visited[nextRow][nextCol] = true;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }

  return islands;
}
