# Best Pair Under Budget

## Approach

Sort the values, then scan with opposite pointers. If the current pair is too large, move the right pointer left. Otherwise record it as a candidate and move the left pointer to search for a larger feasible sum.

## Complexity

- Time: O(n log n) because of sorting
- Space: O(n) for the copied sorted array

## Invariants

- Any pair using the current right value with a larger left index would only increase the sum.
- When a pair is feasible, moving the left pointer is the only way to try a larger feasible sum.

## Edge Cases

- Fewer than two values returns -1.
- Duplicate values can still form the best pair.
- Negative values do not break the logic.

## Reflection

This is a classic "maximize under a constraint" problem. Sorting first makes the search space monotonic enough for two pointers.
