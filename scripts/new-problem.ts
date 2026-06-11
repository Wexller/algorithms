import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import {
  MODULES,
  STAGES,
  getModuleDirectoryName,
  getStageDirectoryName,
  metadataSchema,
} from "./lib/types.js";

const templateDir = path.resolve("templates/problem");

function sanitizeId(input: string): string {
  return input.trim().toUpperCase();
}

async function renderTemplate(
  templateName: string,
  replacements: Record<string, string>,
): Promise<string> {
  const template = await readFile(path.join(templateDir, templateName), "utf8");

  return Object.entries(replacements).reduce(
    (content, [key, value]) => content.replaceAll(`__${key}__`, value),
    template,
  );
}

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: {
      stage: { type: "string" },
      module: { type: "string" },
      slug: { type: "string" },
      title: { type: "string" },
      difficulty: { type: "string" },
      tags: { type: "string" },
      id: { type: "string" },
    },
  });

  const stage = values.stage;
  const moduleName = values.module;
  const slug = values.slug;
  const title = values.title;
  const difficulty = values.difficulty;
  const tags = values.tags;
  const providedId = values.id;

  if (
    !stage ||
    !moduleName ||
    !slug ||
    !title ||
    !difficulty ||
    !tags ||
    !STAGES.includes(stage as (typeof STAGES)[number]) ||
    !MODULES.includes(moduleName as (typeof MODULES)[number])
  ) {
    throw new Error(
      "Usage: npm run new:problem -- --stage <stage> --module <module> --slug <slug> --title <title> --difficulty <easy|medium|hard> --tags a,b,c [--id ALG-9999]",
    );
  }

  const id = sanitizeId(providedId ?? `ALG-${Date.now().toString().slice(-4)}`);
  const problemDir = path.resolve(
    "problems",
    getStageDirectoryName(stage),
    getModuleDirectoryName(moduleName),
    slug,
  );

  const metadata = {
    id,
    title,
    stage,
    module: moduleName,
    difficulty,
    tags: tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    required: false,
    prerequisites: [],
    sourceType: "original-local",
    expectedTimeComplexity: "TODO",
    expectedSpaceComplexity: "TODO",
    status: "pending",
  };

  metadataSchema.parse(metadata);

  const replacements = {
    ID: id,
    TITLE: title,
    SLUG: slug,
    STAGE: stage,
    MODULE: moduleName,
    DIFFICULTY: difficulty,
    TAGS: metadata.tags.join(", "),
  };

  await mkdir(problemDir, { recursive: true });
  await writeFile(
    path.join(problemDir, "metadata.json"),
    `${JSON.stringify(metadata, null, 2)}\n`,
  );
  await writeFile(
    path.join(problemDir, "problem.ru.md"),
    await renderTemplate("problem.ru.md", replacements),
  );
  await writeFile(
    path.join(problemDir, "notes.ru.md"),
    await renderTemplate("notes.ru.md", replacements),
  );
  await writeFile(
    path.join(problemDir, "attempts.md"),
    await renderTemplate("attempts.md", replacements),
  );
  await writeFile(
    path.join(problemDir, "solution.ts"),
    await renderTemplate("solution.ts", replacements),
  );
  await writeFile(
    path.join(problemDir, "solution.test.ts"),
    await renderTemplate("solution.test.ts", replacements),
  );

  console.log(`Created ${problemDir}`);
}

void main();
