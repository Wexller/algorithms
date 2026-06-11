import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Merge Busy Slots", () => {
  it("merges overlapping intervals", () => {
    expect(
      solve([
        [1, 3],
        [2, 6],
        [8, 10],
        [9, 12],
      ]),
    ).toEqual([
      [1, 6],
      [8, 12],
    ]);
  });

  it("keeps disjoint intervals separate", () => {
    expect(
      solve([
        [1, 2],
        [4, 5],
      ]),
    ).toEqual([
      [1, 2],
      [4, 5],
    ]);
  });
});
