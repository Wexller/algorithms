import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Longest Flat Run", () => {
  it("finds the longest duplicate streak", () => {
    expect(solve([3, 3, 3, 1, 1, 5])).toBe(3);
  });

  it("handles an empty array", () => {
    expect(solve([])).toBe(0);
  });
});
