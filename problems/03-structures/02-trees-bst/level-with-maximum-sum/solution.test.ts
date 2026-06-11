import { describe, expect, it } from "vitest";
import { TreeNode, solve } from "./solution";

describe("Level With Maximum Sum", () => {
  it("finds the level with the maximum sum", () => {
    const root = new TreeNode(
      1,
      new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
      new TreeNode(0),
    );

    expect(solve(root)).toBe(1);
  });

  it("handles an empty tree", () => {
    expect(solve(null)).toBe(-1);
  });
});
