import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Island Count", () => {
  it("counts disconnected islands", () => {
    expect(
      solve([
        ["1", "1", "0"],
        ["0", "1", "0"],
        ["1", "0", "1"],
      ]),
    ).toBe(3);
  });

  it("handles an empty grid", () => {
    expect(solve([])).toBe(0);
  });
});
