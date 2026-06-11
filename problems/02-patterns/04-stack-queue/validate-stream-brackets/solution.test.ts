import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Validate Stream Brackets", () => {
  it("accepts a valid stream", () => {
    expect(solve("{[()]}")).toBe(true);
  });

  it("rejects a wrong closing order", () => {
    expect(solve("{[(])}")).toBe(false);
  });

  it("rejects unfinished openings", () => {
    expect(solve("(((")).toBe(false);
  });
});
