# Kth Largest Value

## Approach

Keep a min-heap of size k. After processing every value, the heap contains the k largest values seen so far, and the heap top is the kth largest among them.

## Complexity

- Time: O(n log k)
- Space: O(k)

## Invariants

- The heap never stores more than k elements.
- Every element outside the heap is not larger than the kth largest element currently tracked.

## Edge Cases

- k = 1 asks for the maximum.
- k = values.length asks for the minimum.
- Duplicate values still count as separate positions.

## Reflection

This is the core heap selection pattern: keep only the useful frontier instead of sorting the full input.
