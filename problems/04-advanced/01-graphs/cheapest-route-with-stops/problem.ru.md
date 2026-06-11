# Cheapest Route With Stops

## Summary

Find the cheapest route from source to destination using at most `k` stops.

## Input

`cityCount: number`, `flights: Array<[from, to, price]>`, `src: number`, `dst: number`, `k: number`.

## Output

Minimum price or `-1`.

## Examples

### Example 1

- Input: cityCount = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
- Output: 200
- Explanation: The one-stop path 0 -> 1 -> 2 is cheaper.

## Constraints

- At most `k` stops means at most `k + 1` edges.

## Status

- Stage: `advanced`
- Module: `graphs`
- Difficulty: `hard`
- Required: `false`
- Status: `pending`
