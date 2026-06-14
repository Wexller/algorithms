# Local Algorithm Academy

Local-first TypeScript project for learning algorithmic problem solving step by step. The repository is designed for deliberate practice, strict self-review, and manual GitHub pushes from your machine.

## What This Project Includes

- A staged roadmap from fundamentals to advanced topics.
- A local problem bank with original training tasks and a standard folder layout.
- Strong validation rules for completed solutions.
- Templates and scripts for creating new problems.
- Local-only quality gates: lint, tests, repository validation, git hooks.
- A documented workflow for asking an assistant to explain ideas or review your solution.

## Requirements

- Node.js `24+`
- npm `11+`
- Git

## Setup

```bash
npm install
npm run seed:problems
```

The install step also enables `husky` hooks through the `prepare` script. If hooks are missing after install, run:

```bash
npm run prepare
chmod +x .husky/pre-commit .husky/pre-push
```

## Repository Structure

```text
docs/ru/                     Russian learning materials and rules
problems/01-<stage>/01-<module>/   Numbered training paths by level and topic
scripts/                     Local tooling and validators
templates/problem/          Scaffolding templates for new problems
```

Stage numbering:

- `01-foundations`
- `02-patterns`
- `03-structures`
- `04-advanced`

Each problem directory contains:

- `problem.ru.md` - statement, examples, and constraints
- `solution.ts` - implementation with a named export `solve`
- `solution.test.ts` - local unit tests
- `notes.ru.md` - approach, complexity, invariants, edge cases, reflection
- `attempts.md` - attempt log and failure analysis
- `metadata.json` - status, tags, prerequisites, and expected complexity

## Core Workflow

1. Pick the next required problem from the current module.
2. Read `problem.ru.md` and write your first solution in `solution.ts`.
3. Add or update tests in `solution.test.ts`.
4. Fill `notes.ru.md` and `attempts.md`.
5. Run `npm run check`.
6. Commit only when tests, lint, and repository validation pass.

## Commands

```bash
npm run test
npm run lint
npm run format
npm run validate:repo
npm run progress
npm run check
```

Create a new problem:

```bash
npm run new:problem -- \
  --stage foundations \
  --module arrays \
  --slug sample-problem \
  --title "Sample Problem" \
  --difficulty easy \
  --tags arrays,simulation
```

The CLI still uses logical names such as `foundations` and `arrays`. The scripts map them to numbered directories automatically.

## Completion Rules

A problem counts as `solved` only when all of the following are true:

- `solution.ts` does not contain a placeholder implementation.
- `solution.test.ts` contains active passing tests.
- `notes.ru.md` includes filled sections for approach, complexity, invariants, edge cases, and reflection.
- `attempts.md` records at least one real attempt and the final outcome.
- `metadata.json` status is set to `solved`.

Pending and blocked problems may keep skipped tests and placeholder notes, but their status must reflect reality.

## Git And GitHub

Initialize a remote manually when you are ready:

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

Recommended branch names:

- `study/<module>-<slug>`
- `feat/<scope>`
- `fix/<scope>`

Recommended commit prefixes:

- `study:`
- `feat:`
- `fix:`
- `docs:`
- `test:`
- `refactor:`
- `chore:`

The local hooks enforce:

- `pre-commit` -> `lint-staged`
- `pre-push` -> `npm run check`

## Assistant Usage

This repo is built for local work with optional assistant support. See [docs/ru/assistant-workflows.md](/Users/workspace/Projects/self/algorithms/docs/ru/assistant-workflows.md) for exact prompts and expectations, and [docs/ru/review-agent.md](/Users/workspace/Projects/self/algorithms/docs/ru/review-agent.md) for the named review agent used to verify solved problems.

## Recommended Learning Path

Start with the required problems in this order:

1. `problems/01-foundations`
2. `problems/02-patterns`
3. `problems/03-structures`
4. `problems/04-advanced`

Detailed progression rules live in [docs/ru/curriculum.md](/Users/workspace/Projects/self/algorithms/docs/ru/curriculum.md) and [docs/ru/rules.md](/Users/workspace/Projects/self/algorithms/docs/ru/rules.md).
