# Merge Busy Slots

## Approach

Sort intervals by start time, then scan once while keeping the last merged interval. Overlap means the current start is not greater than the last merged end.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Invariants

- The merged list is always sorted.
- The last interval in the merged list represents the full merged coverage of all processed overlaps.

## Edge Cases

- Empty input returns an empty list.
- Fully nested intervals collapse into the outer interval.
- Already disjoint intervals remain unchanged.

## Reflection

This module mixes binary-search style thinking and intervals, but the first must-have skill is simply learning to sort and sweep correctly.
