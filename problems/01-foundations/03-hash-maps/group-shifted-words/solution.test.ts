import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Group Shifted Words", () => {
  it("groups words by relative shifts", () => {
    expect(solve(["abc", "bcd", "az", "ba"])).toEqual([
      ["abc", "bcd"],
      ["az", "ba"],
    ]);
  });
});
