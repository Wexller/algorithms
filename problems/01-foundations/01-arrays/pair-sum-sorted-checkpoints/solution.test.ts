import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Pair Sum In Sorted Checkpoints", () => {
  it("finds a valid pair", () => {
    expect(solve([1, 2, 4, 7, 11], 9)).toEqual([1, 3]);
  });

  it("returns missing marker when no pair exists", () => {
    expect(solve([2, 5, 9], 20)).toEqual([-1, -1]);
  });

  it("handles duplicates", () => {
    expect(solve([1, 1, 3, 4], 2)).toEqual([0, 1]);
  });
});
