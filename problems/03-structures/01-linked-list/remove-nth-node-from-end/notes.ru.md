# Remove Nth Node From End

## Approach

Place a fast pointer n + 1 steps ahead of a slow pointer that starts from a dummy node. When fast reaches the end, slow sits just before the node to remove.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- The distance between fast and slow remains exactly n + 1 nodes after initialization.
- The dummy head prevents special-case logic when removing the original head.

## Edge Cases

- A single-node list becomes empty.
- Removing the head is safe because the dummy node owns the first pointer change.
- Removing the tail still works because slow stops right before it.

## Reflection

Linked-list deletion problems get much simpler once you normalize the head case with a dummy node.
