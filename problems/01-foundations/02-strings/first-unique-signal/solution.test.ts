import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("First Unique Signal", () => {
  it("returns the first unique character index", () => {
    expect(solve("swiss")).toBe(1);
  });

  it("returns -1 when all characters repeat", () => {
    expect(solve("aabb")).toBe(-1);
  });
});
