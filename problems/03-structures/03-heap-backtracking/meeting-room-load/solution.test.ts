import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Meeting Room Load", () => {
  it("returns the minimum room count", () => {
    expect(
      solve([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).toBe(2);
  });
});
