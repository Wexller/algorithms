# Агент проверки решений

В проекте есть специальный именованный агент для проверки решённых задач: `Review Gate`.

## Когда его вызывать

- Когда задача уже решена и нужен строгий review.
- Когда нужно понять, можно ли переводить задачу в `solved`.
- Когда хочется проверить не только код, но и тесты, заметки, попытки и `metadata.json`.

## Как его вызвать

Используй один из таких запросов:

```text
Используй агента Review Gate.
Проверь решенную задачу problems/<nn-stage>/<nn-module>/<slug>.
```

```text
Включи algorithm-reviewer и проверь задачу problems/<nn-stage>/<nn-module>/<slug>.
Скажи, готова ли она к статусу solved.
```

```text
Позови агент проверки для problems/<nn-stage>/<nn-module>/<slug>.
Нужен строгий review перед solved.
```

## Что именно проверяет агент

Агент обязан прочитать:

- `problem.ru.md`
- `solution.ts`
- `solution.test.ts`
- `notes.ru.md`
- `attempts.md`
- `metadata.json`

Потом он проверяет в таком порядке:

1. correctness bugs
2. complexity risks
3. missing or weak tests
4. gaps in reasoning
5. consistency between code, tests, notes, attempts, and metadata

Если ты спрашиваешь про готовность к `solved`, агент дополнительно должен опираться на локальные проверки репозитория.

## Формат ответа

Ожидай такой формат:

1. `Verdict:` `ready`, `needs fixes`, или `blocked by evidence`
2. `Findings:` список проблем с локальными путями
3. `Missing evidence:` чего не хватает для уверенного решения
4. `Next step:` минимальный следующий шаг

Если критичных замечаний нет, агент всё равно должен указать остаточный риск: например, слабые граничные тесты или не запущенный `npm run check`.
