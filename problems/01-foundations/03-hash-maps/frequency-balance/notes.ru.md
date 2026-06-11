# Frequency Balance

## Approach

Count characters from the first string, then subtract counts while scanning the second. Any negative count or length mismatch proves failure immediately.

## Complexity

- Time: O(n)
- Space: O(k), where k is the number of distinct characters

## Invariants

- The map always stores "remaining needed" counts after processing part of the right string.
- Negative counts mean the right string used a character too many times.

## Edge Cases

- Different lengths return false immediately.
- Repeated letters are handled naturally by the counter.
- Empty strings should return true.

## Reflection

This is a clean example of converting a string relation into a counting problem with a single mutable map.
