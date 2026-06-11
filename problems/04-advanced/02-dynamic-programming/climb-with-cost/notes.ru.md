# Climb With Cost

## Approach

Dynamic programming on the prefix: the cheapest way to stand before step i depends only on the previous two positions.

## Complexity

- Time: O(n)
- Space: O(1)

## Invariants

- prevOne stores the best cost to reach the current frontier.
- prevTwo stores the best cost one step behind that frontier.

## Edge Cases

- Arrays of length 0 or 1 still work because the loop boundaries naturally handle them.
- Starting on step 0 or 1 is encoded in the base state 0, 0.

## Reflection

This is a clean introduction to DP because the state transition is tiny and local, yet still teaches how to define state precisely.
