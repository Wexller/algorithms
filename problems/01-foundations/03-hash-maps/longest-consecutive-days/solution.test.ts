import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Longest Consecutive Days", () => {
  it("finds the longest consecutive run", () => {
    expect(solve([100, 4, 200, 1, 3, 2])).toBe(4);
  });
});
