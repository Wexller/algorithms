import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Longest Flat Run", () => {
  it("finds the longest duplicate streak", () => {
    expect(solve([3, 3, 3, 1, 1, 5])).toBe(3);
  });

  it("handles an empty array", () => {
    expect(solve([])).toBe(0);
  });

  it("returns one when all values are distinct", () => {
    expect(solve([1, 2, 3, 4])).toBe(1);
  });

  it("counts a run that ends at the last element", () => {
    expect(solve([5, 1, 1, 1])).toBe(3);
  });

  it("handles a full-array run", () => {
    expect(solve([7, 7, 7, 7])).toBe(4);
  });
});
