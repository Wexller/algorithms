import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Climb With Cost", () => {
  it("computes the minimum cost", () => {
    expect(solve([10, 15, 20])).toBe(15);
  });

  it("handles a longer example", () => {
    expect(solve([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
