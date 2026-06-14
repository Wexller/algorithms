import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Longest Consecutive Days", () => {
  it("finds the longest consecutive run", () => {
    expect(solve([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it("handles duplicates without overcounting", () => {
    expect(solve([1, 2, 2, 3])).toBe(3);
  });

  it("returns zero for empty input", () => {
    expect(solve([])).toBe(0);
  });

  it("supports negative values", () => {
    expect(solve([-2, -1, 0, 4])).toBe(3);
  });
});
