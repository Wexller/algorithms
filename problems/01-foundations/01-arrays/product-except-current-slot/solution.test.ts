import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Product Except Current Slot", () => {
  it("builds products around each position", () => {
    expect(solve([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("handles zeros", () => {
    expect(solve([0, 4, 0])).toEqual([0, 0, 0]);
  });
});
