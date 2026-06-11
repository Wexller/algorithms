import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Reverse Words With Clean Spaces", () => {
  it("reverses words and removes extra spaces", () => {
    expect(solve("  blue   sky  today ")).toBe("today sky blue");
  });

  it("handles one word", () => {
    expect(solve("single")).toBe("single");
  });

  it("handles empty trimmed content", () => {
    expect(solve("     ")).toBe("");
  });
});
