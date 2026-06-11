import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Missing Metric Position", () => {
  it("finds the missing number", () => {
    expect(solve([0, 1, 2, 4, 5])).toBe(3);
  });
});
