import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Compress Runs", () => {
  it("compresses repeated characters", () => {
    expect(solve("aaabbc")).toBe("a3b2c");
  });

  it("keeps singles without a suffix", () => {
    expect(solve("abc")).toBe("abc");
  });
});
