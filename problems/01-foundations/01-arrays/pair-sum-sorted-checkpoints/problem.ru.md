# Pair Sum In Sorted Checkpoints

## Summary

Given a sorted array of checkpoint values and a target, return the zero-based indices of two values that sum to the target. If no pair exists, return `[-1, -1]`.

## Input

`values: number[]`, `target: number`.

## Output

A tuple `[leftIndex, rightIndex]`.

## Examples

### Example 1

- Input: values = [1, 2, 4, 7, 11], target = 9
- Output: [1, 3]
- Explanation: 2 + 7 = 9.

### Example 2

- Input: values = [2, 5, 9], target = 20
- Output: [-1, -1]
- Explanation: No pair reaches the target.

## Constraints

- The array is already sorted in non-decreasing order.
- Exactly one pair may exist, but it is also valid that no pair exists.

## Status

- Stage: `foundations`
- Module: `arrays`
- Difficulty: `easy`
- Required: `true`
- Status: `solved`
