import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Course Order Check", () => {
  it("returns true when courses are acyclic", () => {
    expect(solve(2, [[1, 0]])).toBe(true);
  });

  it("returns false on a cycle", () => {
    expect(
      solve(2, [
        [1, 0],
        [0, 1],
      ]),
    ).toBe(false);
  });
});
