export class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export function solve(root: TreeNode | null): number {
  if (root === null) {
    return -1;
  }

  const queue: TreeNode[] = [root];
  let head = 0;
  let bestLevel = 0;
  let bestSum = Number.NEGATIVE_INFINITY;
  let level = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    let sum = 0;

    for (let count = 0; count < levelSize; count += 1) {
      const node = queue[head];
      head += 1;
      sum += node.value;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    if (sum > bestSum) {
      bestSum = sum;
      bestLevel = level;
    }
    level += 1;
  }

  return bestLevel;
}
