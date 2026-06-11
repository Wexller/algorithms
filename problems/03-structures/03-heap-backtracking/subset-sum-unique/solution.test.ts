import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Subset Sum Unique", () => {
  it("returns unique subsets summing to the target", () => {
    expect(solve([1, 1, 2, 5], 3)).toEqual([[1, 2]]);
  });
});
