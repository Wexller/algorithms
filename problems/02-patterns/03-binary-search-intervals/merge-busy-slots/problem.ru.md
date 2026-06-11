# Merge Busy Slots

## Summary

Merge overlapping intervals and return the compacted list.

## Input

`slots: Array<[number, number]>`.

## Output

Merged intervals sorted by start time.

## Examples

### Example 1

- Input: slots = [[1, 3], [2, 6], [8, 10], [9, 12]]
- Output: [[1, 6], [8, 12]]
- Explanation: The first two overlap and the last two overlap.

## Constraints

- Each interval is inclusive and uses `start <= end`.

## Status

- Stage: `patterns`
- Module: `binary-search-intervals`
- Difficulty: `easy`
- Required: `true`
- Status: `solved`
