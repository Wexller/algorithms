import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Daily Warmer Span", () => {
  it("computes waits to the next warmer day", () => {
    expect(solve([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });
});
