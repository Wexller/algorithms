import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Max Flips Streak", () => {
  it("returns the best streak after up to k flips", () => {
    expect(solve([1, 0, 1, 1, 0], 1)).toBe(4);
  });
});
