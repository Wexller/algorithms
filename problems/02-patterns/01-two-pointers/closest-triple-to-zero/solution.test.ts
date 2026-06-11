import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Closest Triple To Zero", () => {
  it("returns the closest triple sum", () => {
    expect(solve([-4, -1, 1, 2])).toBe(-1);
  });
});
