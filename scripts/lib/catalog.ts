import type { Difficulty, ModuleName, ProblemStatus, Stage } from "./types.js";

type Example = {
  input: string;
  output: string;
  explanation: string;
};

export type CatalogProblem = {
  id: string;
  title: string;
  slug: string;
  stage: Stage;
  module: ModuleName;
  difficulty: Difficulty;
  tags: string[];
  required: boolean;
  prerequisites: string[];
  expectedTimeComplexity: string;
  expectedSpaceComplexity: string;
  status: ProblemStatus;
  summary: string;
  inputDescription: string;
  outputDescription: string;
  examples: Example[];
  constraints: string[];
  solution: string;
  test: string;
  notes?: string;
  attempts?: string;
};

export const catalog: CatalogProblem[] = [
  {
    id: "ALG-1001",
    title: "Pair Sum In Sorted Checkpoints",
    slug: "pair-sum-sorted-checkpoints",
    stage: "foundations",
    module: "arrays",
    difficulty: "easy",
    tags: ["arrays", "two-pointers", "sorting"],
    required: true,
    prerequisites: [],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "solved",
    summary:
      "Given a sorted array of checkpoint values and a target, return the zero-based indices of two values that sum to the target. If no pair exists, return `[-1, -1]`.",
    inputDescription: "`values: number[]`, `target: number`.",
    outputDescription: "A tuple `[leftIndex, rightIndex]`.",
    examples: [
      {
        input: "values = [1, 2, 4, 7, 11], target = 9",
        output: "[1, 3]",
        explanation: "2 + 7 = 9.",
      },
      {
        input: "values = [2, 5, 9], target = 20",
        output: "[-1, -1]",
        explanation: "No pair reaches the target.",
      },
    ],
    constraints: [
      "The array is already sorted in non-decreasing order.",
      "Exactly one pair may exist, but it is also valid that no pair exists.",
    ],
    solution: `export function solve(values: number[], target: number): [number, number] {
  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    const sum = values[left] + values[right];
    if (sum === target) {
      return [left, right];
    }

    if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Pair Sum In Sorted Checkpoints", () => {
  it("finds a valid pair", () => {
    expect(solve([1, 2, 4, 7, 11], 9)).toEqual([1, 3]);
  });

  it("returns missing marker when no pair exists", () => {
    expect(solve([2, 5, 9], 20)).toEqual([-1, -1]);
  });

  it("handles duplicates", () => {
    expect(solve([1, 1, 3, 4], 2)).toEqual([0, 1]);
  });
});
`,
    notes: `# Pair Sum In Sorted Checkpoints

## Approach

The array is sorted, so opposite pointers give enough information to move deterministically. When the sum is too small, only the left pointer can help. When the sum is too large, only the right pointer can help.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- All pairs outside the current [left, right] window were already proven impossible.
- Moving the left pointer rightward only increases or preserves the sum.
- Moving the right pointer leftward only decreases or preserves the sum.

## Edge Cases

- Empty array or single element returns [-1, -1].
- Duplicate values are fine because indices still distinguish the pair.
- Negative values also work as long as the array remains sorted.

## Reflection

The key signal is "sorted + pair". That almost always suggests an opposite-pointer scan before considering hash maps.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Started with a hash map baseline, then simplified to two pointers because the array is sorted. |
`,
  },
  {
    id: "ALG-1002",
    title: "Product Except Current Slot",
    slug: "product-except-current-slot",
    stage: "foundations",
    module: "arrays",
    difficulty: "medium",
    tags: ["arrays", "prefix", "suffix"],
    required: true,
    prerequisites: ["ALG-1001"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1) extra space",
    status: "pending",
    summary:
      "Return an array where each position contains the product of all other numbers except the current one. Do not use division.",
    inputDescription: "`values: number[]`.",
    outputDescription: "A new array of products.",
    examples: [
      {
        input: "values = [1, 2, 3, 4]",
        output: "[24, 12, 8, 6]",
        explanation: "Each slot multiplies every other value.",
      },
    ],
    constraints: ["Aim for linear time.", "Handle zeros correctly."],
    solution: `export function solve(values: number[]): number[] {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Product Except Current Slot", () => {
  it("builds products around each position", () => {
    expect(solve([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("handles zeros", () => {
    expect(solve([0, 4, 0])).toEqual([0, 0, 0]);
  });
});
`,
  },
  {
    id: "ALG-1003",
    title: "Longest Flat Run",
    slug: "longest-flat-run",
    stage: "foundations",
    module: "arrays",
    difficulty: "easy",
    tags: ["arrays", "scan"],
    required: false,
    prerequisites: ["ALG-1002"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary: "Find the length of the longest contiguous run of equal numbers.",
    inputDescription: "`values: number[]`.",
    outputDescription: "The maximum run length.",
    examples: [
      {
        input: "values = [3, 3, 3, 1, 1, 5]",
        output: "3",
        explanation: "The first run has length 3.",
      },
    ],
    constraints: ["Return 0 for an empty array."],
    solution: `export function solve(values: number[]): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Longest Flat Run", () => {
  it("finds the longest duplicate streak", () => {
    expect(solve([3, 3, 3, 1, 1, 5])).toBe(3);
  });

  it("handles an empty array", () => {
    expect(solve([])).toBe(0);
  });
});
`,
  },
  {
    id: "ALG-1004",
    title: "Reverse Words With Clean Spaces",
    slug: "reverse-words-clean-spaces",
    stage: "foundations",
    module: "strings",
    difficulty: "easy",
    tags: ["strings", "parsing"],
    required: true,
    prerequisites: ["ALG-1001"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",
    status: "solved",
    summary:
      "Reverse the order of words in a string, remove extra spaces, and separate words with a single space.",
    inputDescription: "`text: string`.",
    outputDescription: "The cleaned reversed string.",
    examples: [
      {
        input: 'text = "  blue   sky  today "',
        output: '"today sky blue"',
        explanation: "Leading, trailing, and repeated spaces disappear.",
      },
    ],
    constraints: ["Words are separated by spaces only."],
    solution: `export function solve(text: string): string {
  return text.trim().split(/\\s+/).reverse().join(" ");
}
`,
    test: `import { describe, expect, it } from "vitest";
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
`,
    notes: `# Reverse Words With Clean Spaces

## Approach

Normalize the whitespace first, then reverse the word list. The important detail is to trim before splitting so empty tokens do not leak into the result.

## Complexity

- Time: O(n)
- Space: O(n)

## Invariants

- After normalization, each token is a real word.
- Reversing the token array preserves all words exactly once.

## Edge Cases

- An all-space string should become an empty string.
- A single word stays unchanged.
- Multiple internal spaces should collapse to one.

## Reflection

This is simple string hygiene, but it reinforces the habit of normalizing input before manipulating it.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Trimmed first, then used a regex split to avoid empty string tokens. |
`,
  },
  {
    id: "ALG-1005",
    title: "First Unique Signal",
    slug: "first-unique-signal",
    stage: "foundations",
    module: "strings",
    difficulty: "easy",
    tags: ["strings", "frequency-map"],
    required: true,
    prerequisites: ["ALG-1004"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(k)",
    status: "pending",
    summary:
      "Return the index of the first character that appears exactly once in the string. Return `-1` if no such character exists.",
    inputDescription: "`text: string`.",
    outputDescription: "Zero-based index or `-1`.",
    examples: [
      {
        input: 'text = "swiss"',
        output: "1",
        explanation: "The first unique character is `w`.",
      },
    ],
    constraints: ["Treat uppercase and lowercase as different characters."],
    solution: `export function solve(text: string): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("First Unique Signal", () => {
  it("returns the first unique character index", () => {
    expect(solve("swiss")).toBe(1);
  });

  it("returns -1 when all characters repeat", () => {
    expect(solve("aabb")).toBe(-1);
  });
});
`,
  },
  {
    id: "ALG-1006",
    title: "Compress Runs",
    slug: "compress-runs",
    stage: "foundations",
    module: "strings",
    difficulty: "medium",
    tags: ["strings", "two-pointers"],
    required: false,
    prerequisites: ["ALG-1005"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "Compress consecutive equal characters into `char + count`, omitting the count when it is 1.",
    inputDescription: "`text: string`.",
    outputDescription: "A compressed string.",
    examples: [
      {
        input: 'text = "aaabbc"',
        output: '"a3b2c"',
        explanation: "Three `a`, two `b`, one `c`.",
      },
    ],
    constraints: ["Preserve the original character order."],
    solution: `export function solve(text: string): string {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Compress Runs", () => {
  it("compresses repeated characters", () => {
    expect(solve("aaabbc")).toBe("a3b2c");
  });

  it("keeps singles without a suffix", () => {
    expect(solve("abc")).toBe("abc");
  });
});
`,
  },
  {
    id: "ALG-1007",
    title: "Frequency Balance",
    slug: "frequency-balance",
    stage: "foundations",
    module: "hash-maps",
    difficulty: "easy",
    tags: ["hash-map", "counting", "strings"],
    required: true,
    prerequisites: ["ALG-1004"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(k)",
    status: "solved",
    summary:
      "Return `true` when two strings contain exactly the same character counts, otherwise return `false`.",
    inputDescription: "`left: string`, `right: string`.",
    outputDescription: "Boolean equality of frequency maps.",
    examples: [
      {
        input: 'left = "listen", right = "silent"',
        output: "true",
        explanation: "Both strings contain the same counts for each character.",
      },
    ],
    constraints: ["Different lengths can never match."],
    solution: `export function solve(left: string, right: string): boolean {
  if (left.length !== right.length) {
    return false;
  }

  const counts = new Map<string, number>();
  for (const char of left) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of right) {
    const next = (counts.get(char) ?? 0) - 1;
    if (next < 0) {
      return false;
    }
    counts.set(char, next);
  }

  return Array.from(counts.values()).every((count) => count === 0);
}
`,
    test: `import { describe, expect, it } from "vitest";
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
`,
    notes: `# Frequency Balance

## Approach

Count characters from the first string, then subtract counts while scanning the second. Any negative count or length mismatch proves failure immediately.

## Complexity

- Time: O(n)
- Space: O(k), where k is the number of distinct characters

## Invariants

- The map always stores "remaining needed" counts after processing part of the right string.
- Negative counts mean the right string used a character too many times.

## Edge Cases

- Different lengths return false immediately.
- Repeated letters are handled naturally by the counter.
- Empty strings should return true.

## Reflection

This is a clean example of converting a string relation into a counting problem with a single mutable map.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Used one map instead of building two full maps because it provides earlier failure and less redundant work. |
`,
  },
  {
    id: "ALG-1008",
    title: "Group Shifted Words",
    slug: "group-shifted-words",
    stage: "foundations",
    module: "hash-maps",
    difficulty: "medium",
    tags: ["hash-map", "grouping", "strings"],
    required: true,
    prerequisites: ["ALG-1007"],
    expectedTimeComplexity: "O(n * m)",
    expectedSpaceComplexity: "O(n * m)",
    status: "pending",
    summary:
      "Group words that share the same sequence of relative character shifts. For example, `abc` and `bcd` belong together.",
    inputDescription: "`words: string[]`.",
    outputDescription: "An array of groups.",
    examples: [
      {
        input: 'words = ["abc", "bcd", "az", "ba"]',
        output: '[["abc", "bcd"], ["az", "ba"]]',
        explanation: "Each group preserves the same internal shift pattern.",
      },
    ],
    constraints: ["Words of different lengths cannot be in the same group."],
    solution: `export function solve(words: string[]): string[][] {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Group Shifted Words", () => {
  it("groups words by relative shifts", () => {
    expect(solve(["abc", "bcd", "az", "ba"])).toEqual([
      ["abc", "bcd"],
      ["az", "ba"],
    ]);
  });
});
`,
  },
  {
    id: "ALG-1009",
    title: "Longest Consecutive Days",
    slug: "longest-consecutive-days",
    stage: "foundations",
    module: "hash-maps",
    difficulty: "medium",
    tags: ["hash-set", "arrays"],
    required: false,
    prerequisites: ["ALG-1008"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "Given unsorted day numbers, find the length of the longest consecutive run.",
    inputDescription: "`days: number[]`.",
    outputDescription: "Maximum consecutive run length.",
    examples: [
      {
        input: "days = [100, 4, 200, 1, 3, 2]",
        output: "4",
        explanation: "The run 1, 2, 3, 4 has length 4.",
      },
    ],
    constraints: ["Duplicate values may appear."],
    solution: `export function solve(days: number[]): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Longest Consecutive Days", () => {
  it("finds the longest consecutive run", () => {
    expect(solve([100, 4, 200, 1, 3, 2])).toBe(4);
  });
});
`,
  },
  {
    id: "ALG-1010",
    title: "Best Pair Under Budget",
    slug: "best-pair-under-budget",
    stage: "patterns",
    module: "two-pointers",
    difficulty: "medium",
    tags: ["two-pointers", "arrays", "optimization"],
    required: true,
    prerequisites: ["ALG-1007"],
    expectedTimeComplexity: "O(n log n)",
    expectedSpaceComplexity: "O(n)",
    status: "solved",
    summary:
      "Choose two numbers whose sum is as large as possible without exceeding the budget. Return that best sum, or `-1` if no pair fits.",
    inputDescription: "`costs: number[]`, `budget: number`.",
    outputDescription: "Best valid sum or `-1`.",
    examples: [
      {
        input: "costs = [7, 2, 9, 4], budget = 10",
        output: "9",
        explanation: "2 + 7 = 9 is the best feasible pair.",
      },
    ],
    constraints: ["You must choose two distinct elements."],
    solution: `export function solve(costs: number[], budget: number): number {
  if (costs.length < 2) {
    return -1;
  }

  const sorted = [...costs].sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let best = -1;

  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum > budget) {
      right -= 1;
      continue;
    }

    best = Math.max(best, sum);
    left += 1;
  }

  return best;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Best Pair Under Budget", () => {
  it("returns the best valid sum", () => {
    expect(solve([7, 2, 9, 4], 10)).toBe(9);
  });

  it("returns -1 when no pair fits", () => {
    expect(solve([8, 9], 10)).toBe(-1);
  });

  it("uses duplicate values when helpful", () => {
    expect(solve([5, 5, 6], 10)).toBe(10);
  });
});
`,
    notes: `# Best Pair Under Budget

## Approach

Sort the values, then scan with opposite pointers. If the current pair is too large, move the right pointer left. Otherwise record it as a candidate and move the left pointer to search for a larger feasible sum.

## Complexity

- Time: O(n log n) because of sorting
- Space: O(n) for the copied sorted array

## Invariants

- Any pair using the current right value with a larger left index would only increase the sum.
- When a pair is feasible, moving the left pointer is the only way to try a larger feasible sum.

## Edge Cases

- Fewer than two values returns -1.
- Duplicate values can still form the best pair.
- Negative values do not break the logic.

## Reflection

This is a classic "maximize under a constraint" problem. Sorting first makes the search space monotonic enough for two pointers.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Tried a nested loop baseline, then switched to sorted two pointers once the monotonic relationship was clear. |
`,
  },
  {
    id: "ALG-1011",
    title: "Keep At Most Two Copies",
    slug: "keep-at-most-two-copies",
    stage: "patterns",
    module: "two-pointers",
    difficulty: "medium",
    tags: ["two-pointers", "arrays", "in-place"],
    required: true,
    prerequisites: ["ALG-1010"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary:
      "Given a sorted array, rewrite it in place so each value appears at most twice. Return the new logical length.",
    inputDescription: "`values: number[]`.",
    outputDescription: "New length after in-place compaction.",
    examples: [
      {
        input: "values = [1, 1, 1, 2, 2, 3]",
        output: "5",
        explanation: "The array prefix becomes `[1, 1, 2, 2, 3]`.",
      },
    ],
    constraints: ["The relative order of kept values must stay the same."],
    solution: `export function solve(values: number[]): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Keep At Most Two Copies", () => {
  it("returns the new logical length", () => {
    const values = [1, 1, 1, 2, 2, 3];
    expect(solve(values)).toBe(5);
    expect(values.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });
});
`,
  },
  {
    id: "ALG-1012",
    title: "Closest Triple To Zero",
    slug: "closest-triple-to-zero",
    stage: "patterns",
    module: "two-pointers",
    difficulty: "medium",
    tags: ["two-pointers", "arrays", "sorting"],
    required: false,
    prerequisites: ["ALG-1011"],
    expectedTimeComplexity: "O(n^2)",
    expectedSpaceComplexity: "O(1) extra space",
    status: "pending",
    summary: "Find a triple whose sum is closest to zero and return that sum.",
    inputDescription: "`values: number[]`.",
    outputDescription: "The closest sum.",
    examples: [
      {
        input: "values = [-4, -1, 1, 2]",
        output: "-1",
        explanation:
          "The closest triple is -4 + 1 + 2 = -1. No triple sums exactly to zero.",
      },
    ],
    constraints: ["Assume at least three numbers."],
    solution: `export function solve(values: number[]): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Closest Triple To Zero", () => {
  it("returns the closest triple sum", () => {
    expect(solve([-4, -1, 1, 2])).toBe(-1);
  });
});
`,
  },
  {
    id: "ALG-1013",
    title: "Longest Budget Window",
    slug: "longest-budget-window",
    stage: "patterns",
    module: "sliding-window",
    difficulty: "medium",
    tags: ["sliding-window", "arrays", "sum"],
    required: true,
    prerequisites: ["ALG-1010"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "solved",
    summary:
      "Find the maximum length of a contiguous subarray whose sum does not exceed the budget.",
    inputDescription: "`costs: number[]`, `budget: number`.",
    outputDescription: "Maximum feasible window length.",
    examples: [
      {
        input: "costs = [2, 1, 3, 2, 1], budget = 5",
        output: "2",
        explanation: "The best windows are `[2, 1]`, `[3, 2]`, or `[2, 1]`.",
      },
    ],
    constraints: ["All costs are non-negative."],
    solution: `export function solve(costs: number[], budget: number): number {
  let left = 0;
  let windowSum = 0;
  let best = 0;

  for (let right = 0; right < costs.length; right += 1) {
    windowSum += costs[right];

    while (windowSum > budget && left <= right) {
      windowSum -= costs[left];
      left += 1;
    }

    best = Math.max(best, right - left + 1);
  }

  return best;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Longest Budget Window", () => {
  it("finds the longest valid window", () => {
    expect(solve([2, 1, 3, 2, 1], 5)).toBe(2);
  });

  it("returns zero when no item fits", () => {
    expect(solve([6, 7], 5)).toBe(0);
  });

  it("handles an exact full-array match", () => {
    expect(solve([1, 1, 1], 3)).toBe(3);
  });
});
`,
    notes: `# Longest Budget Window

## Approach

Maintain a window with a running sum. Extend the right side greedily, and whenever the budget is broken, shrink from the left until the window is valid again.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- After the inner while loop, the current window always satisfies the budget.
- Each index enters and leaves the window at most once.

## Edge Cases

- If every single value exceeds the budget, the answer is 0.
- Zero values are harmless because the running sum still behaves monotonically.

## Reflection

The strong signal is "longest contiguous segment under a monotonic constraint with non-negative numbers." That is textbook sliding window territory.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Wrote the running-sum version and then verified that non-negative inputs are what make window shrinking safe. |
`,
  },
  {
    id: "ALG-1014",
    title: "Smallest Covering Window",
    slug: "smallest-covering-window",
    stage: "patterns",
    module: "sliding-window",
    difficulty: "hard",
    tags: ["sliding-window", "strings", "frequency-map"],
    required: true,
    prerequisites: ["ALG-1013"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(k)",
    status: "pending",
    summary:
      "Find the smallest substring of `text` that contains all characters of `pattern` with multiplicity.",
    inputDescription: "`text: string`, `pattern: string`.",
    outputDescription: "The minimum covering substring or an empty string.",
    examples: [
      {
        input: 'text = "ADOBECODEBANC", pattern = "ABC"',
        output: '"BANC"',
        explanation: "That is the shortest window covering A, B, and C.",
      },
    ],
    constraints: ["Character multiplicity matters."],
    solution: `export function solve(text: string, pattern: string): string {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Smallest Covering Window", () => {
  it("finds the minimum covering substring", () => {
    expect(solve("ADOBECODEBANC", "ABC")).toBe("BANC");
  });
});
`,
  },
  {
    id: "ALG-1015",
    title: "Max Flips Streak",
    slug: "max-flips-streak",
    stage: "patterns",
    module: "sliding-window",
    difficulty: "medium",
    tags: ["sliding-window", "binary-array"],
    required: false,
    prerequisites: ["ALG-1014"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary:
      "Given a binary array and `k`, flip at most `k` zeros to ones and return the longest possible contiguous streak of ones.",
    inputDescription: "`bits: number[]`, `k: number`.",
    outputDescription: "Maximum streak length.",
    examples: [
      {
        input: "bits = [1, 0, 1, 1, 0], k = 1",
        output: "4",
        explanation: "Flip the last zero in the best window.",
      },
    ],
    constraints: ["Input contains only 0 and 1."],
    solution: `export function solve(bits: number[], k: number): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Max Flips Streak", () => {
  it("returns the best streak after up to k flips", () => {
    expect(solve([1, 0, 1, 1, 0], 1)).toBe(4);
  });
});
`,
  },
  {
    id: "ALG-1016",
    title: "Merge Busy Slots",
    slug: "merge-busy-slots",
    stage: "patterns",
    module: "binary-search-intervals",
    difficulty: "easy",
    tags: ["intervals", "sorting"],
    required: true,
    prerequisites: ["ALG-1013"],
    expectedTimeComplexity: "O(n log n)",
    expectedSpaceComplexity: "O(n)",
    status: "solved",
    summary: "Merge overlapping intervals and return the compacted list.",
    inputDescription: "`slots: Array<[number, number]>`.",
    outputDescription: "Merged intervals sorted by start time.",
    examples: [
      {
        input: "slots = [[1, 3], [2, 6], [8, 10], [9, 12]]",
        output: "[[1, 6], [8, 12]]",
        explanation: "The first two overlap and the last two overlap.",
      },
    ],
    constraints: ["Each interval is inclusive and uses `start <= end`."],
    solution: `export function solve(slots: Array<[number, number]>): Array<[number, number]> {
  if (slots.length === 0) {
    return [];
  }

  const sorted = [...slots].sort((left, right) => left[0] - right[0]);
  const merged: Array<[number, number]> = [sorted[0]];

  for (let index = 1; index < sorted.length; index += 1) {
    const current = sorted[index];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push([...current] as [number, number]);
    }
  }

  return merged;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Merge Busy Slots", () => {
  it("merges overlapping intervals", () => {
    expect(
      solve([
        [1, 3],
        [2, 6],
        [8, 10],
        [9, 12],
      ]),
    ).toEqual([
      [1, 6],
      [8, 12],
    ]);
  });

  it("keeps disjoint intervals separate", () => {
    expect(
      solve([
        [1, 2],
        [4, 5],
      ]),
    ).toEqual([
      [1, 2],
      [4, 5],
    ]);
  });
});
`,
    notes: `# Merge Busy Slots

## Approach

Sort intervals by start time, then scan once while keeping the last merged interval. Overlap means the current start is not greater than the last merged end.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Invariants

- The merged list is always sorted.
- The last interval in the merged list represents the full merged coverage of all processed overlaps.

## Edge Cases

- Empty input returns an empty list.
- Fully nested intervals collapse into the outer interval.
- Already disjoint intervals remain unchanged.

## Reflection

This module mixes binary-search style thinking and intervals, but the first must-have skill is simply learning to sort and sweep correctly.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Verified the overlap condition carefully to avoid off-by-one mistakes on touching boundaries. |
`,
  },
  {
    id: "ALG-1017",
    title: "Capacity Threshold Search",
    slug: "capacity-threshold-search",
    stage: "patterns",
    module: "binary-search-intervals",
    difficulty: "medium",
    tags: ["binary-search", "answer-search"],
    required: true,
    prerequisites: ["ALG-1016"],
    expectedTimeComplexity: "O(n log answer)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary:
      "Given package weights and a number of days, find the minimum daily capacity that can ship everything in time.",
    inputDescription: "`weights: number[]`, `days: number`.",
    outputDescription: "Minimum feasible capacity.",
    examples: [
      {
        input: "weights = [1, 2, 3, 1, 1], days = 4",
        output: "3",
        explanation: "Capacity 3 is the smallest value that works.",
      },
    ],
    constraints: ["Packages must stay in original order."],
    solution: `export function solve(weights: number[], days: number): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Capacity Threshold Search", () => {
  it("finds the minimum feasible capacity", () => {
    expect(solve([1, 2, 3, 1, 1], 4)).toBe(3);
  });
});
`,
  },
  {
    id: "ALG-1018",
    title: "Missing Metric Position",
    slug: "missing-metric-position",
    stage: "patterns",
    module: "binary-search-intervals",
    difficulty: "medium",
    tags: ["binary-search", "arrays"],
    required: false,
    prerequisites: ["ALG-1017"],
    expectedTimeComplexity: "O(log n)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary:
      "A sorted array contains every number from `0` to `n` except one. Return the missing number.",
    inputDescription: "`values: number[]`.",
    outputDescription: "The missing number.",
    examples: [
      {
        input: "values = [0, 1, 2, 4, 5]",
        output: "3",
        explanation: "Index and value first disagree at position 3.",
      },
    ],
    constraints: ["Values are distinct and sorted."],
    solution: `export function solve(values: number[]): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Missing Metric Position", () => {
  it("finds the missing number", () => {
    expect(solve([0, 1, 2, 4, 5])).toBe(3);
  });
});
`,
  },
  {
    id: "ALG-1019",
    title: "Validate Stream Brackets",
    slug: "validate-stream-brackets",
    stage: "patterns",
    module: "stack-queue",
    difficulty: "easy",
    tags: ["stack", "strings"],
    required: true,
    prerequisites: ["ALG-1016"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",
    status: "solved",
    summary:
      "Return `true` if every opening bracket is closed in the correct order.",
    inputDescription: "`stream: string`.",
    outputDescription: "Boolean validity.",
    examples: [
      {
        input: 'stream = "{[()]}"',
        output: "true",
        explanation: "Every opener closes in the reverse order.",
      },
    ],
    constraints: ["Input consists only of `()[]{}`."],
    solution: `export function solve(stream: string): boolean {
  const closingToOpening = new Map<string, string>([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const opening = new Set(closingToOpening.values());
  const stack: string[] = [];

  for (const token of stream) {
    if (opening.has(token)) {
      stack.push(token);
      continue;
    }

    if (closingToOpening.get(token) !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
`,
    test: `import { describe, expect, it } from "vitest";
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
`,
    notes: `# Validate Stream Brackets

## Approach

Use a stack of opening brackets. Every closing bracket must match the latest unmatched opener.

## Complexity

- Time: O(n)
- Space: O(n)

## Invariants

- The stack always contains unmatched opening brackets in order.
- A mismatch is fatal immediately because no future token can fix bracket order.

## Edge Cases

- Empty input is valid.
- A closing bracket without a matching opener fails immediately.
- Leftover openers at the end mean failure.

## Reflection

Bracket validity is the canonical stack warm-up because it demonstrates "last unmatched thing must resolve first."
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Straight stack solution; focused on failing fast on mismatched closers instead of overcomplicating the control flow. |
`,
  },
  {
    id: "ALG-1020",
    title: "Daily Warmer Span",
    slug: "daily-warmer-span",
    stage: "patterns",
    module: "stack-queue",
    difficulty: "medium",
    tags: ["monotonic-stack", "arrays"],
    required: true,
    prerequisites: ["ALG-1019"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "For each day, return how many days you must wait until a warmer temperature. Return 0 if none exists.",
    inputDescription: "`temps: number[]`.",
    outputDescription: "Array of waiting times.",
    examples: [
      {
        input: "temps = [73, 74, 75, 71, 69, 72, 76, 73]",
        output: "[1, 1, 4, 2, 1, 1, 0, 0]",
        explanation: "Each answer points to the next warmer day.",
      },
    ],
    constraints: ["Use linear time."],
    solution: `export function solve(temps: number[]): number[] {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Daily Warmer Span", () => {
  it("computes waits to the next warmer day", () => {
    expect(solve([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });
});
`,
  },
  {
    id: "ALG-1021",
    title: "Queue With Max",
    slug: "queue-with-max",
    stage: "patterns",
    module: "stack-queue",
    difficulty: "hard",
    tags: ["queue", "monotonic-deque", "design"],
    required: false,
    prerequisites: ["ALG-1020"],
    expectedTimeComplexity: "O(1) amortized",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "Design a queue that supports push, pop, and `max()` in amortized O(1).",
    inputDescription: "A sequence of queue operations.",
    outputDescription:
      "Correct queue behavior plus constant-time maximum queries.",
    examples: [
      {
        input: "push 3, push 1, max, pop, max",
        output: "3, 3, 1",
        explanation: "The max changes only when the leading maximum leaves.",
      },
    ],
    constraints: ["A design-style problem. You may model operations in tests."],
    solution: `export function solve(): string {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, it } from "vitest";

describe.skip("Queue With Max", () => {
  it("is intentionally left for a custom design implementation", () => {
    // Build an API that makes sense, then replace this test block.
  });
});
`,
  },
  {
    id: "ALG-1022",
    title: "Remove Nth Node From End",
    slug: "remove-nth-node-from-end",
    stage: "structures",
    module: "linked-list",
    difficulty: "medium",
    tags: ["linked-list", "two-pointers"],
    required: true,
    prerequisites: ["ALG-1019"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "solved",
    summary:
      "Remove the nth node from the end of a singly linked list and return the head of the updated list.",
    inputDescription: "`head: ListNode | null`, `n: number`.",
    outputDescription: "The updated head.",
    examples: [
      {
        input: "head = [1, 2, 3, 4, 5], n = 2",
        output: "[1, 2, 3, 5]",
        explanation: "The node with value 4 is removed.",
      },
    ],
    constraints: ["Assume `n` is valid for the current list length."],
    solution: `export class ListNode {
  constructor(
    public value: number,
    public next: ListNode | null = null,
  ) {}
}

export function solve(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let step = 0; step <= n; step += 1) {
    fast = fast?.next ?? null;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }

  if (slow?.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { ListNode, solve } from "./solution";

function fromArray(values: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}

describe("Remove Nth Node From End", () => {
  it("removes a middle node", () => {
    expect(toArray(solve(fromArray([1, 2, 3, 4, 5]), 2))).toEqual([1, 2, 3, 5]);
  });

  it("removes the head", () => {
    expect(toArray(solve(fromArray([1]), 1))).toEqual([]);
  });

  it("removes the tail", () => {
    expect(toArray(solve(fromArray([1, 2]), 1))).toEqual([1]);
  });
});
`,
    notes: `# Remove Nth Node From End

## Approach

Place a fast pointer n + 1 steps ahead of a slow pointer that starts from a dummy node. When fast reaches the end, slow sits just before the node to remove.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- The distance between fast and slow remains exactly n + 1 nodes after initialization.
- The dummy head prevents special-case logic when removing the original head.

## Edge Cases

- A single-node list becomes empty.
- Removing the head is safe because the dummy node owns the first pointer change.
- Removing the tail still works because slow stops right before it.

## Reflection

Linked-list deletion problems get much simpler once you normalize the head case with a dummy node.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Used the dummy-node pattern immediately to avoid branching on head removal. |
`,
  },
  {
    id: "ALG-1023",
    title: "Odd Even Reorder",
    slug: "odd-even-reorder",
    stage: "structures",
    module: "linked-list",
    difficulty: "medium",
    tags: ["linked-list", "reordering"],
    required: true,
    prerequisites: ["ALG-1022"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary:
      "Reorder a linked list so nodes at odd indices come first, followed by nodes at even indices.",
    inputDescription: "`head: ListNode | null`.",
    outputDescription: "Reordered head.",
    examples: [
      {
        input: "head = [1, 2, 3, 4, 5]",
        output: "[1, 3, 5, 2, 4]",
        explanation:
          "Odd-position nodes stay in order, then even-position nodes.",
      },
    ],
    constraints: ["Indices are 1-based positions in the list."],
    solution: `export class ListNode {
  constructor(
    public value: number,
    public next: ListNode | null = null,
  ) {}
}

export function solve(head: ListNode | null): ListNode | null {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, it } from "vitest";

describe.skip("Odd Even Reorder", () => {
  it("needs custom linked-list helpers and assertions", () => {
    // Replace with real list helpers when you solve the problem.
  });
});
`,
  },
  {
    id: "ALG-1024",
    title: "Cycle Entry",
    slug: "cycle-entry",
    stage: "structures",
    module: "linked-list",
    difficulty: "hard",
    tags: ["linked-list", "fast-slow-pointers"],
    required: false,
    prerequisites: ["ALG-1023"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "pending",
    summary:
      "If a linked list contains a cycle, return the node where the cycle begins. Otherwise return `null`.",
    inputDescription: "`head: ListNode | null`.",
    outputDescription: "Cycle entry node or `null`.",
    examples: [
      {
        input: "head = [3, 2, 0, -4] with tail connecting to index 1",
        output: "node with value 2",
        explanation: "The cycle begins at the second node.",
      },
    ],
    constraints: ["Use constant extra space."],
    solution: `export class ListNode {
  constructor(
    public value: number,
    public next: ListNode | null = null,
  ) {}
}

export function solve(head: ListNode | null): ListNode | null {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, it } from "vitest";

describe.skip("Cycle Entry", () => {
  it("should be implemented with explicit cycle-building helpers", () => {
    // Replace with custom helpers when solving.
  });
});
`,
  },
  {
    id: "ALG-1025",
    title: "Level With Maximum Sum",
    slug: "level-with-maximum-sum",
    stage: "structures",
    module: "trees-bst",
    difficulty: "medium",
    tags: ["trees", "bfs"],
    required: true,
    prerequisites: ["ALG-1022"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(w)",
    status: "solved",
    summary:
      "Return the zero-based level index whose node values sum to the largest total.",
    inputDescription: "`root: TreeNode | null`.",
    outputDescription: "Best level index, or `-1` for an empty tree.",
    examples: [
      {
        input: "root = [1, 7, 0, 7, -8]",
        output: "1",
        explanation: "Level 1 has sum 7, which beats level 0 and level 2.",
      },
    ],
    constraints: ["Use breadth-first or depth-first traversal."],
    solution: `export class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export function solve(root: TreeNode | null): number {
  if (root === null) {
    return -1;
  }

  const queue: TreeNode[] = [root];
  let head = 0;
  let bestLevel = 0;
  let bestSum = Number.NEGATIVE_INFINITY;
  let level = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    let sum = 0;

    for (let count = 0; count < levelSize; count += 1) {
      const node = queue[head];
      head += 1;
      sum += node.value;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    if (sum > bestSum) {
      bestSum = sum;
      bestLevel = level;
    }
    level += 1;
  }

  return bestLevel;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { TreeNode, solve } from "./solution";

describe("Level With Maximum Sum", () => {
  it("finds the level with the maximum sum", () => {
    const root = new TreeNode(
      1,
      new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
      new TreeNode(0),
    );

    expect(solve(root)).toBe(1);
  });

  it("handles an empty tree", () => {
    expect(solve(null)).toBe(-1);
  });
});
`,
    notes: `# Level With Maximum Sum

## Approach

Traverse level by level with BFS. For each layer, accumulate the sum and compare it against the best seen so far.

## Complexity

- Time: O(n)
- Space: O(w), where w is the maximum width

## Invariants

- The queue segment processed in one outer loop iteration contains exactly one level.
- bestLevel always points to the earliest level with the current best sum.

## Edge Cases

- Empty tree returns -1.
- Negative values still work because sums are compared directly.

## Reflection

Level-order traversal is the cleanest fit because the question is already expressed in terms of tree levels.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Chose BFS instead of DFS because the result is defined by levels, not just subtree state. |
`,
  },
  {
    id: "ALG-1026",
    title: "Lowest Common Manager",
    slug: "lowest-common-manager",
    stage: "structures",
    module: "trees-bst",
    difficulty: "medium",
    tags: ["trees", "recursion"],
    required: true,
    prerequisites: ["ALG-1025"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(h)",
    status: "pending",
    summary:
      "Given a binary tree and two node values, return the value of their lowest common ancestor.",
    inputDescription:
      "`root: TreeNode | null`, `leftValue: number`, `rightValue: number`.",
    outputDescription: "The ancestor value or `null` if missing.",
    examples: [
      {
        input: "root = [3, 5, 1, 6, 2, 0, 8], leftValue = 5, rightValue = 1",
        output: "3",
        explanation: "The root is their lowest common ancestor.",
      },
    ],
    constraints: ["You may assume all node values are unique."],
    solution: `export class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export function solve(
  root: TreeNode | null,
  leftValue: number,
  rightValue: number,
): number | null {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, it } from "vitest";

describe.skip("Lowest Common Manager", () => {
  it("should be implemented with custom tree helpers", () => {
    // Replace with real tree-based assertions.
  });
});
`,
  },
  {
    id: "ALG-1027",
    title: "BST Two Sum",
    slug: "bst-two-sum",
    stage: "structures",
    module: "trees-bst",
    difficulty: "medium",
    tags: ["bst", "trees", "hash-set"],
    required: false,
    prerequisites: ["ALG-1026"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "Return `true` when a BST contains two values whose sum equals the target.",
    inputDescription: "`root: TreeNode | null`, `target: number`.",
    outputDescription: "Boolean answer.",
    examples: [
      {
        input: "root = [5, 3, 6, 2, 4, null, 7], target = 9",
        output: "true",
        explanation: "2 + 7 = 9.",
      },
    ],
    constraints: ["Values may be negative."],
    solution: `export class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export function solve(root: TreeNode | null, target: number): boolean {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, it } from "vitest";

describe.skip("BST Two Sum", () => {
  it("should be implemented with explicit tree builders", () => {
    // Replace with real BST tests.
  });
});
`,
  },
  {
    id: "ALG-1028",
    title: "Kth Largest Value",
    slug: "kth-largest-value",
    stage: "structures",
    module: "heap-backtracking",
    difficulty: "medium",
    tags: ["heap", "selection"],
    required: true,
    prerequisites: ["ALG-1025"],
    expectedTimeComplexity: "O(n log k)",
    expectedSpaceComplexity: "O(k)",
    status: "solved",
    summary: "Return the kth largest value in an unsorted array.",
    inputDescription: "`values: number[]`, `k: number`.",
    outputDescription: "The kth largest element.",
    examples: [
      {
        input: "values = [3, 2, 1, 5, 6, 4], k = 2",
        output: "5",
        explanation: "The sorted order descending is 6, 5, 4, 3, 2, 1.",
      },
    ],
    constraints: ["Assume `1 <= k <= values.length`."],
    solution: `class MinHeap {
  private readonly data: number[] = [];

  get size(): number {
    return this.data.length;
  }

  peek(): number | undefined {
    return this.data[0];
  }

  push(value: number): void {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): number | undefined {
    if (this.data.length === 0) {
      return undefined;
    }

    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0 && last !== undefined) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(index: number): void {
    let current = index;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.data[parent] <= this.data[current]) {
        break;
      }
      [this.data[parent], this.data[current]] = [
        this.data[current],
        this.data[parent],
      ];
      current = parent;
    }
  }

  private bubbleDown(index: number): void {
    let current = index;
    while (true) {
      const left = current * 2 + 1;
      const right = left + 1;
      let smallest = current;

      if (left < this.data.length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
      if (right < this.data.length && this.data[right] < this.data[smallest]) {
        smallest = right;
      }

      if (smallest === current) {
        break;
      }

      [this.data[current], this.data[smallest]] = [
        this.data[smallest],
        this.data[current],
      ];
      current = smallest;
    }
  }
}

export function solve(values: number[], k: number): number {
  const heap = new MinHeap();

  for (const value of values) {
    heap.push(value);
    if (heap.size > k) {
      heap.pop();
    }
  }

  return heap.peek() ?? Number.NaN;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Kth Largest Value", () => {
  it("returns the kth largest element", () => {
    expect(solve([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it("handles duplicates", () => {
    expect(solve([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
`,
    notes: `# Kth Largest Value

## Approach

Keep a min-heap of size k. After processing every value, the heap contains the k largest values seen so far, and the heap top is the kth largest among them.

## Complexity

- Time: O(n log k)
- Space: O(k)

## Invariants

- The heap never stores more than k elements.
- Every element outside the heap is not larger than the kth largest element currently tracked.

## Edge Cases

- k = 1 asks for the maximum.
- k = values.length asks for the minimum.
- Duplicate values still count as separate positions.

## Reflection

This is the core heap selection pattern: keep only the useful frontier instead of sorting the full input.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Considered full sorting first, then replaced it with a size-k min-heap to hit the intended complexity. |
`,
  },
  {
    id: "ALG-1029",
    title: "Subset Sum Unique",
    slug: "subset-sum-unique",
    stage: "structures",
    module: "heap-backtracking",
    difficulty: "medium",
    tags: ["backtracking", "subsets"],
    required: true,
    prerequisites: ["ALG-1028"],
    expectedTimeComplexity: "O(2^n)",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "Return all unique subsets whose values sum to the target. Each input element may be used at most once.",
    inputDescription: "`values: number[]`, `target: number`.",
    outputDescription: "List of unique subsets.",
    examples: [
      {
        input: "values = [1, 1, 2, 5], target = 3",
        output: "[[1, 2]]",
        explanation:
          "Duplicate `1` values should not create duplicate subsets.",
      },
    ],
    constraints: ["Order of subsets does not matter."],
    solution: `export function solve(values: number[], target: number): number[][] {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Subset Sum Unique", () => {
  it("returns unique subsets summing to the target", () => {
    expect(solve([1, 1, 2, 5], 3)).toEqual([[1, 2]]);
  });
});
`,
  },
  {
    id: "ALG-1030",
    title: "Meeting Room Load",
    slug: "meeting-room-load",
    stage: "structures",
    module: "heap-backtracking",
    difficulty: "medium",
    tags: ["heap", "intervals"],
    required: false,
    prerequisites: ["ALG-1029"],
    expectedTimeComplexity: "O(n log n)",
    expectedSpaceComplexity: "O(n)",
    status: "pending",
    summary:
      "Given meeting intervals, return the minimum number of rooms required.",
    inputDescription: "`meetings: Array<[number, number]>`.",
    outputDescription: "Minimum room count.",
    examples: [
      {
        input: "meetings = [[0, 30], [5, 10], [15, 20]]",
        output: "2",
        explanation: "Two overlapping meetings need two rooms.",
      },
    ],
    constraints: ["Intervals use `start < end`."],
    solution: `export function solve(meetings: Array<[number, number]>): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Meeting Room Load", () => {
  it("returns the minimum room count", () => {
    expect(
      solve([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).toBe(2);
  });
});
`,
  },
  {
    id: "ALG-1031",
    title: "Island Count",
    slug: "island-count",
    stage: "advanced",
    module: "graphs",
    difficulty: "medium",
    tags: ["graphs", "grid", "bfs"],
    required: true,
    prerequisites: ["ALG-1028"],
    expectedTimeComplexity: "O(rows * cols)",
    expectedSpaceComplexity: "O(rows * cols)",
    status: "solved",
    summary:
      "Count islands in a binary grid using 4-directional adjacency only.",
    inputDescription: "`grid: string[][]` containing `'1'` and `'0'`.",
    outputDescription: "Number of islands.",
    examples: [
      {
        input: "grid = [[1,1,0],[0,1,0],[1,0,1]]",
        output: "3",
        explanation: "The diagonal cells do not connect.",
      },
    ],
    constraints: ["Cells connect only up, down, left, and right."],
    solution: `export function solve(grid: string[][]): number {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let islands = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] !== "1" || visited[row][col]) {
        continue;
      }

      islands += 1;
      const queue: Array<[number, number]> = [[row, col]];
      visited[row][col] = true;
      let head = 0;

      while (head < queue.length) {
        const [currentRow, currentCol] = queue[head];
        head += 1;

        for (const [rowDelta, colDelta] of directions) {
          const nextRow = currentRow + rowDelta;
          const nextCol = currentCol + colDelta;

          if (
            nextRow < 0 ||
            nextRow >= rows ||
            nextCol < 0 ||
            nextCol >= cols ||
            visited[nextRow][nextCol] ||
            grid[nextRow][nextCol] !== "1"
          ) {
            continue;
          }

          visited[nextRow][nextCol] = true;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }

  return islands;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Island Count", () => {
  it("counts disconnected islands", () => {
    expect(
      solve([
        ["1", "1", "0"],
        ["0", "1", "0"],
        ["1", "0", "1"],
      ]),
    ).toBe(3);
  });

  it("handles an empty grid", () => {
    expect(solve([])).toBe(0);
  });
});
`,
    notes: `# Island Count

## Approach

Scan the grid. Every unvisited land cell starts a BFS that marks exactly one island.

## Complexity

- Time: O(rows * cols)
- Space: O(rows * cols)

## Invariants

- Each land cell is visited at most once.
- One BFS call corresponds to exactly one connected component.

## Edge Cases

- Empty grid returns 0.
- Diagonal land does not connect.
- All-water and all-land grids are both valid.

## Reflection

This is the first graph-flavored pattern many people learn: turn the grid into an implicit graph and count connected components.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Chose BFS with an explicit queue for clarity; DFS would work too but iterative BFS is easier to reason about here. |
`,
  },
  {
    id: "ALG-1032",
    title: "Course Order Check",
    slug: "course-order-check",
    stage: "advanced",
    module: "graphs",
    difficulty: "medium",
    tags: ["graphs", "topological-sort"],
    required: true,
    prerequisites: ["ALG-1031"],
    expectedTimeComplexity: "O(V + E)",
    expectedSpaceComplexity: "O(V + E)",
    status: "pending",
    summary:
      "Given course prerequisites, return whether all courses can be completed.",
    inputDescription:
      "`courseCount: number`, `edges: Array<[number, number]>`.",
    outputDescription: "Boolean answer.",
    examples: [
      {
        input: "courseCount = 2, edges = [[1, 0]]",
        output: "true",
        explanation: "Course 0 can be taken before course 1.",
      },
    ],
    constraints: ["A cycle makes completion impossible."],
    solution: `export function solve(
  courseCount: number,
  edges: Array<[number, number]>,
): boolean {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Course Order Check", () => {
  it("returns true when courses are acyclic", () => {
    expect(solve(2, [[1, 0]])).toBe(true);
  });

  it("returns false on a cycle", () => {
    expect(
      solve(2, [
        [1, 0],
        [0, 1],
      ]),
    ).toBe(false);
  });
});
`,
  },
  {
    id: "ALG-1033",
    title: "Cheapest Route With Stops",
    slug: "cheapest-route-with-stops",
    stage: "advanced",
    module: "graphs",
    difficulty: "hard",
    tags: ["graphs", "shortest-path"],
    required: false,
    prerequisites: ["ALG-1032"],
    expectedTimeComplexity: "O(E log V)",
    expectedSpaceComplexity: "O(V + E)",
    status: "pending",
    summary:
      "Find the cheapest route from source to destination using at most `k` stops.",
    inputDescription:
      "`cityCount: number`, `flights: Array<[from, to, price]>`, `src: number`, `dst: number`, `k: number`.",
    outputDescription: "Minimum price or `-1`.",
    examples: [
      {
        input:
          "cityCount = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        output: "200",
        explanation: "The one-stop path 0 -> 1 -> 2 is cheaper.",
      },
    ],
    constraints: ["At most `k` stops means at most `k + 1` edges."],
    solution: `export function solve(
  cityCount: number,
  flights: Array<[number, number, number]>,
  src: number,
  dst: number,
  k: number,
): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Cheapest Route With Stops", () => {
  it("finds the cheapest route within the stop limit", () => {
    expect(
      solve(
        3,
        [
          [0, 1, 100],
          [1, 2, 100],
          [0, 2, 500],
        ],
        0,
        2,
        1,
      ),
    ).toBe(200);
  });
});
`,
  },
  {
    id: "ALG-1034",
    title: "Climb With Cost",
    slug: "climb-with-cost",
    stage: "advanced",
    module: "dynamic-programming",
    difficulty: "easy",
    tags: ["dynamic-programming", "state-transition"],
    required: true,
    prerequisites: ["ALG-1031"],
    expectedTimeComplexity: "O(n)",
    expectedSpaceComplexity: "O(1)",
    status: "solved",
    summary:
      "Each stair has a cost. You may climb 1 or 2 steps at a time. Return the minimum total cost to reach the top just beyond the last stair.",
    inputDescription: "`costs: number[]`.",
    outputDescription: "Minimum achievable cost.",
    examples: [
      {
        input: "costs = [10, 15, 20]",
        output: "15",
        explanation: "Start on step 1 and jump directly to the top.",
      },
    ],
    constraints: ["You may start at index 0 or 1."],
    solution: `export function solve(costs: number[]): number {
  let prevTwo = 0;
  let prevOne = 0;

  for (let index = 2; index <= costs.length; index += 1) {
    const next = Math.min(prevOne + costs[index - 1], prevTwo + costs[index - 2]);
    prevTwo = prevOne;
    prevOne = next;
  }

  return prevOne;
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe("Climb With Cost", () => {
  it("computes the minimum cost", () => {
    expect(solve([10, 15, 20])).toBe(15);
  });

  it("handles a longer example", () => {
    expect(solve([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
`,
    notes: `# Climb With Cost

## Approach

Dynamic programming on the prefix: the cheapest way to stand before step i depends only on the previous two positions.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- prevOne stores the best cost to reach the current frontier.
- prevTwo stores the best cost one step behind that frontier.

## Edge Cases

- Arrays of length 0 or 1 still work because the loop boundaries naturally handle them.
- Starting on step 0 or 1 is encoded in the base state 0, 0.

## Reflection

This is a clean introduction to DP because the state transition is tiny and local, yet still teaches how to define state precisely.
`,
    attempts: `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 1 | solved | Wrote the full DP table first, then compressed it to two rolling variables. |
`,
  },
  {
    id: "ALG-1035",
    title: "Longest Palindromic Subsequence",
    slug: "longest-palindromic-subsequence",
    stage: "advanced",
    module: "dynamic-programming",
    difficulty: "medium",
    tags: ["dynamic-programming", "strings"],
    required: true,
    prerequisites: ["ALG-1034"],
    expectedTimeComplexity: "O(n^2)",
    expectedSpaceComplexity: "O(n^2)",
    status: "pending",
    summary:
      "Return the length of the longest subsequence that forms a palindrome.",
    inputDescription: "`text: string`.",
    outputDescription: "Maximum subsequence length.",
    examples: [
      {
        input: 'text = "bbbab"',
        output: "4",
        explanation: "One longest palindromic subsequence is `bbbb`.",
      },
    ],
    constraints: ["Subsequence characters do not need to be contiguous."],
    solution: `export function solve(text: string): number {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Longest Palindromic Subsequence", () => {
  it("returns the longest palindromic subsequence length", () => {
    expect(solve("bbbab")).toBe(4);
  });
});
`,
  },
  {
    id: "ALG-1036",
    title: "Partition Equal Half",
    slug: "partition-equal-half",
    stage: "advanced",
    module: "dynamic-programming",
    difficulty: "medium",
    tags: ["dynamic-programming", "subset-sum"],
    required: false,
    prerequisites: ["ALG-1035"],
    expectedTimeComplexity: "O(n * sum)",
    expectedSpaceComplexity: "O(sum)",
    status: "pending",
    summary:
      "Return `true` when the array can be partitioned into two subsets with equal sum.",
    inputDescription: "`values: number[]`.",
    outputDescription: "Boolean answer.",
    examples: [
      {
        input: "values = [1, 5, 11, 5]",
        output: "true",
        explanation: "The subsets `[1, 5, 5]` and `[11]` both sum to 11.",
      },
    ],
    constraints: ["All values are non-negative integers."],
    solution: `export function solve(values: number[]): boolean {
  throw new Error("Not implemented");
}
`,
    test: `import { describe, expect, it } from "vitest";
import { solve } from "./solution";

describe.skip("Partition Equal Half", () => {
  it("returns true when equal partition exists", () => {
    expect(solve([1, 5, 11, 5])).toBe(true);
  });

  it("returns false when it does not", () => {
    expect(solve([1, 2, 3, 5])).toBe(false);
  });
});
`,
  },
];
