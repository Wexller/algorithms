import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Compress Runs", () => {
  it("compresses repeated characters", () => {
    expect(solve("aaabbc")).toBe("a3b2c");
  });

  it("keeps singles without a suffix", () => {
    expect(solve("abc")).toBe("abc");
  });

  it("returns an empty string for empty input", () => {
    expect(solve("")).toBe("");
  });

  it("handles a run that reaches the end of the string", () => {
    expect(solve("abccc")).toBe("abc3");
  });

  it("supports multi-digit run lengths", () => {
    expect(solve("aaaaaaaaaaa")).toBe("a11");
  });
});
