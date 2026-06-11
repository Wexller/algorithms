# Longest Budget Window

## Approach

Maintain a window with a running sum. Extend the right side greedily, and whenever the budget is broken, shrink from the left until the window is valid again.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- After the inner while loop, the current window always satisfies the budget.
- Each index enters and leaves the window at most once.

## Edge Cases

- If every single value exceeds the budget, the answer is 0.
- Zero values are harmless because the running sum still behaves monotonically.

## Reflection

The strong signal is "longest contiguous segment under a monotonic constraint with non-negative numbers." That is textbook sliding window territory.
