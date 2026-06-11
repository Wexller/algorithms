# Level With Maximum Sum

## Approach

Traverse level by level with BFS. For each layer, accumulate the sum and compare it against the best seen so far.

## Complexity

- Time: O(n)
- Space: O(w), where w is the maximum width

## Invariants

- The queue segment processed in one outer loop iteration contains exactly one level.
- bestLevel always points to the earliest level with the current best sum.

## Edge Cases

- Empty tree returns -1.
- Negative values still work because sums are compared directly.

## Reflection

Level-order traversal is the cleanest fit because the question is already expressed in terms of tree levels.
