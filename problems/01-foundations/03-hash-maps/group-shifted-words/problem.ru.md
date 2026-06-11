# Group Shifted Words

## Summary

Group words that share the same sequence of relative character shifts. For example, `abc` and `bcd` belong together.

## Input

`words: string[]`.

## Output

An array of groups.

## Examples

### Example 1

- Input: words = ["abc", "bcd", "az", "ba"]
- Output: [["abc", "bcd"], ["az", "ba"]]
- Explanation: Each group preserves the same internal shift pattern.

## Constraints

- Words of different lengths cannot be in the same group.

## Status

- Stage: `foundations`
- Module: `hash-maps`
- Difficulty: `medium`
- Required: `true`
- Status: `pending`
