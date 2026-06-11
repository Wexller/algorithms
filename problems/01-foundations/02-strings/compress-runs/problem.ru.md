# Compress Runs

## Summary

Compress consecutive equal characters into `char + count`, omitting the count when it is 1.

## Input

`text: string`.

## Output

A compressed string.

## Examples

### Example 1

- Input: text = "aaabbc"
- Output: "a3b2c"
- Explanation: Three `a`, two `b`, one `c`.

## Constraints

- Preserve the original character order.

## Status

- Stage: `foundations`
- Module: `strings`
- Difficulty: `medium`
- Required: `false`
- Status: `pending`
