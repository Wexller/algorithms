import { readFile } from "node:fs/promises";
import path from "node:path";
import { getProblemDirectories } from "./lib/fs-utils.js";
import {
  getModuleDisplayName,
  getStageDisplayName,
  metadataSchema,
  MODULES,
  STAGES,
  type ProblemMetadata,
} from "./lib/types.js";

type ModuleSummary = {
  total: number;
  solved: number;
  blocked: number;
  pending: number;
  requiredTotal: number;
  requiredSolved: number;
};

async function main(): Promise<void> {
  const problemDirs = await getProblemDirectories(path.resolve("problems"));
  const problems: ProblemMetadata[] = await Promise.all(
    problemDirs.map(async (problemDir) =>
      metadataSchema.parse(
        JSON.parse(
          await readFile(path.join(problemDir, "metadata.json"), "utf8"),
        ),
      ),
    ),
  );

  const byModule = new Map<string, ModuleSummary>();
  for (const moduleName of MODULES) {
    byModule.set(moduleName, {
      total: 0,
      solved: 0,
      blocked: 0,
      pending: 0,
      requiredTotal: 0,
      requiredSolved: 0,
    });
  }

  for (const problem of problems) {
    const moduleSummary = byModule.get(problem.module);
    if (!moduleSummary) {
      continue;
    }

    moduleSummary.total += 1;
    moduleSummary[problem.status] += 1;

    if (problem.required) {
      moduleSummary.requiredTotal += 1;
      if (problem.status === "solved") {
        moduleSummary.requiredSolved += 1;
      }
    }
  }

  console.log(`Problems tracked: ${problems.length}`);
  console.log("");

  for (const stage of STAGES) {
    console.log(getStageDisplayName(stage));
    for (const [moduleName, summary] of byModule.entries()) {
      const moduleProblems = problems.filter(
        (problem) => problem.stage === stage && problem.module === moduleName,
      );

      if (moduleProblems.length === 0) {
        continue;
      }

      const requiredStatus = `${summary.requiredSolved}/${summary.requiredTotal}`;
      console.log(
        `- ${getModuleDisplayName(moduleName as ProblemMetadata["module"])}: solved=${summary.solved}, pending=${summary.pending}, blocked=${summary.blocked}, required=${requiredStatus}`,
      );
    }
    console.log("");
  }

  const blocked = problems.filter((problem) => problem.status === "blocked");
  if (blocked.length > 0) {
    console.log("Blocked problems:");
    for (const problem of blocked) {
      console.log(`- ${problem.id} ${problem.title}`);
    }
  }
}

void main();
