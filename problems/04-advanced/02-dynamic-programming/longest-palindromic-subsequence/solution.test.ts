import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Longest Palindromic Subsequence", () => {
  it("returns the longest palindromic subsequence length", () => {
    expect(solve("bbbab")).toBe(4);
  });
});
