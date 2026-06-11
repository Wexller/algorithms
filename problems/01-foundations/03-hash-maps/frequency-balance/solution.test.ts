import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Frequency Balance", () => {
  it("returns true for matching counts", () => {
    expect(solve("listen", "silent")).toBe(true);
  });

  it("returns false for different counts", () => {
    expect(solve("apple", "apply")).toBe(false);
  });

  it("rejects different lengths", () => {
    expect(solve("abc", "ab")).toBe(false);
  });
});
