import { describe, expect, it } from "vitest";
import { solve } from "./solution";

function normalizeGroups(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((left, right) => left.join(",").localeCompare(right.join(",")));
}

describe("Group Shifted Words", () => {
  it("groups words by relative shifts", () => {
    expect(normalizeGroups(solve(["abc", "bcd", "az", "ba"]))).toEqual(
      normalizeGroups([
        ["abc", "bcd"],
        ["az", "ba"],
      ]),
    );
  });

  it("keeps single-letter words together", () => {
    expect(normalizeGroups(solve(["a", "z", "m"]))).toEqual(
      normalizeGroups([["a", "z", "m"]]),
    );
  });

  it("separates groups with different lengths", () => {
    expect(normalizeGroups(solve(["ab", "bc", "acef"]))).toEqual(
      normalizeGroups([["ab", "bc"], ["acef"]]),
    );
  });

  it("handles wraparound shifts", () => {
    expect(normalizeGroups(solve(["az", "ba", "yx"]))).toEqual(
      normalizeGroups([["az", "ba", "yx"]]),
    );
  });
});
