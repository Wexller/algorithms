# Pair Sum In Sorted Checkpoints

## Approach

The array is sorted, so opposite pointers give enough information to move deterministically. When the sum is too small, only the left pointer can help. When the sum is too large, only the right pointer can help.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- All pairs outside the current [left, right] window were already proven impossible.
- Moving the left pointer rightward only increases or preserves the sum.
- Moving the right pointer leftward only decreases or preserves the sum.

## Edge Cases

- Empty array or single element returns [-1, -1].
- Duplicate values are fine because indices still distinguish the pair.
- Negative values also work as long as the array remains sorted.

## Reflection

The key signal is "sorted + pair". That almost always suggests an opposite-pointer scan before considering hash maps.
