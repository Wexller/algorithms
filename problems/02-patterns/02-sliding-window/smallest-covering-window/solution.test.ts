import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Smallest Covering Window", () => {
  it("finds the minimum covering substring", () => {
    expect(solve("ADOBECODEBANC", "ABC")).toBe("BANC");
  });
});
