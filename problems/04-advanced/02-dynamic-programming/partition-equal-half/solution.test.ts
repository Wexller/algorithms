import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Partition Equal Half", () => {
  it("returns true when equal partition exists", () => {
    expect(solve([1, 5, 11, 5])).toBe(true);
  });

  it("returns false when it does not", () => {
    expect(solve([1, 2, 3, 5])).toBe(false);
  });
});
