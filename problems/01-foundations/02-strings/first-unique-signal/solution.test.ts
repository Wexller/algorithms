import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("First Unique Signal", () => {
  it("returns the first unique character index", () => {
    expect(solve("swiss")).toBe(1);
  });

  it("returns -1 when all characters repeat", () => {
    expect(solve("aabb")).toBe(-1);
  });

  it("returns 0 when the first character is unique", () => {
    expect(solve("leetcode")).toBe(0);
  });

  it("distinguishes uppercase and lowercase characters", () => {
    expect(solve("aAbBAB")).toBe(0);
  });

  it("handles an empty string", () => {
    expect(solve("")).toBe(-1);
  });
});
