import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Keep At Most Two Copies", () => {
  it("returns the new logical length", () => {
    const values = [1, 1, 1, 2, 2, 3];
    expect(solve(values)).toBe(5);
    expect(values.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });
});
