import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Best Pair Under Budget", () => {
  it("returns the best valid sum", () => {
    expect(solve([7, 2, 9, 4], 10)).toBe(9);
  });

  it("returns -1 when no pair fits", () => {
    expect(solve([8, 9], 10)).toBe(-1);
  });

  it("uses duplicate values when helpful", () => {
    expect(solve([5, 5, 6], 10)).toBe(10);
  });
});
