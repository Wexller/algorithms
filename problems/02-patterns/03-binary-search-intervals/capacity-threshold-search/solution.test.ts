import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Capacity Threshold Search", () => {
  it("finds the minimum feasible capacity", () => {
    expect(solve([1, 2, 3, 1, 1], 4)).toBe(3);
  });
});
