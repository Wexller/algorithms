# Island Count

## Approach

Scan the grid. Every unvisited land cell starts a BFS that marks exactly one island.

## Complexity

- Time: O(rows \* cols)
- Space: O(rows \* cols)

## Invariants

- Each land cell is visited at most once.
- One BFS call corresponds to exactly one connected component.

## Edge Cases

- Empty grid returns 0.
- Diagonal land does not connect.
- All-water and all-land grids are both valid.

## Reflection

This is the first graph-flavored pattern many people learn: turn the grid into an implicit graph and count connected components.
