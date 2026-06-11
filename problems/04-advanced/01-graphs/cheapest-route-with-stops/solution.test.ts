import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Cheapest Route With Stops", () => {
  it("finds the cheapest route within the stop limit", () => {
    expect(
      solve(
        3,
        [
          [0, 1, 100],
          [1, 2, 100],
          [0, 2, 500],
        ],
        0,
        2,
        1,
      ),
    ).toBe(200);
  });
});
