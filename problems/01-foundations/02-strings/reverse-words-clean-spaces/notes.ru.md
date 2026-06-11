# Reverse Words With Clean Spaces

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
