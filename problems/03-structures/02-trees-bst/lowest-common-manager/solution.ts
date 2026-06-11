export class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export function solve(
  root: TreeNode | null,
  leftValue: number,
  rightValue: number,
): number | null {
  throw new Error("Not implemented");
}
