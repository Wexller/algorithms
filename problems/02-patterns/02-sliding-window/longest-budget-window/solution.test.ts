import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Longest Budget Window", () => {
  it("finds the longest valid window", () => {
    expect(solve([2, 1, 3, 2, 1], 5)).toBe(2);
  });

  it("returns zero when no item fits", () => {
    expect(solve([6, 7], 5)).toBe(0);
  });

  it("handles an exact full-array match", () => {
    expect(solve([1, 1, 1], 3)).toBe(3);
  });
});
