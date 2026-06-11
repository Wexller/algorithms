import { z } from "zod";

export const STAGES = [
  "foundations",
  "patterns",
  "structures",
  "advanced",
] as const;

export const MODULES = [
  "arrays",
  "strings",
  "hash-maps",
  "two-pointers",
  "sliding-window",
  "binary-search-intervals",
  "stack-queue",
  "linked-list",
  "trees-bst",
  "heap-backtracking",
  "graphs",
  "dynamic-programming",
] as const;

export const STATUSES = ["pending", "blocked", "solved"] as const;
export const DIFFICULTIES = ["easy", "medium", "hard"] as const;

export type Stage = (typeof STAGES)[number];
export type ModuleName = (typeof MODULES)[number];
export type ProblemStatus = (typeof STATUSES)[number];
export type Difficulty = (typeof DIFFICULTIES)[number];

export const STAGE_DIRECTORY_NAMES = {
  foundations: "01-foundations",
  patterns: "02-patterns",
  structures: "03-structures",
  advanced: "04-advanced",
} as const satisfies Record<Stage, string>;

export const MODULE_DIRECTORY_NAMES = {
  arrays: "01-arrays",
  strings: "02-strings",
  "hash-maps": "03-hash-maps",
  "two-pointers": "01-two-pointers",
  "sliding-window": "02-sliding-window",
  "binary-search-intervals": "03-binary-search-intervals",
  "stack-queue": "04-stack-queue",
  "linked-list": "01-linked-list",
  "trees-bst": "02-trees-bst",
  "heap-backtracking": "03-heap-backtracking",
  graphs: "01-graphs",
  "dynamic-programming": "02-dynamic-programming",
} as const satisfies Record<ModuleName, string>;

export const STAGE_INDEX = {
  foundations: 1,
  patterns: 2,
  structures: 3,
  advanced: 4,
} as const satisfies Record<Stage, number>;

export const MODULE_INDEX = {
  arrays: 1,
  strings: 2,
  "hash-maps": 3,
  "two-pointers": 1,
  "sliding-window": 2,
  "binary-search-intervals": 3,
  "stack-queue": 4,
  "linked-list": 1,
  "trees-bst": 2,
  "heap-backtracking": 3,
  graphs: 1,
  "dynamic-programming": 2,
} as const satisfies Record<ModuleName, number>;

export function getStageDirectoryName(stage: Stage): string {
  return STAGE_DIRECTORY_NAMES[stage];
}

export function getModuleDirectoryName(moduleName: ModuleName): string {
  return MODULE_DIRECTORY_NAMES[moduleName];
}

export function getStageDisplayName(stage: Stage): string {
  return `${String(STAGE_INDEX[stage]).padStart(2, "0")} ${stage.toUpperCase()}`;
}

export function getModuleDisplayName(moduleName: ModuleName): string {
  return `${String(MODULE_INDEX[moduleName]).padStart(2, "0")} ${moduleName}`;
}

export const REQUIRED_FILES = [
  "metadata.json",
  "problem.ru.md",
  "solution.ts",
  "solution.test.ts",
  "notes.ru.md",
  "attempts.md",
] as const;

export const SOLVED_NOTES_SECTIONS = [
  "## Approach",
  "## Complexity",
  "## Invariants",
  "## Edge Cases",
  "## Reflection",
] as const;

export const metadataSchema = z.object({
  id: z.string().regex(/^ALG-\d{4}$/),
  title: z.string().min(3),
  stage: z.enum(STAGES),
  module: z.enum(MODULES),
  difficulty: z.enum(DIFFICULTIES),
  tags: z.array(z.string().min(2)).min(1),
  required: z.boolean(),
  prerequisites: z.array(z.string().regex(/^ALG-\d{4}$/)),
  sourceType: z.literal("original-local"),
  expectedTimeComplexity: z.string().min(2),
  expectedSpaceComplexity: z.string().min(2),
  status: z.enum(STATUSES),
});

export type ProblemMetadata = z.infer<typeof metadataSchema>;
