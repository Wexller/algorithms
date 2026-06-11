import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Kth Largest Value", () => {
  it("returns the kth largest element", () => {
    expect(solve([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it("handles duplicates", () => {
    expect(solve([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
