# Validate Stream Brackets

## Approach

Use a stack of opening brackets. Every closing bracket must match the latest unmatched opener.

## Complexity

- Time: O(n)
- Space: O(n)

## Invariants

- The stack always contains unmatched opening brackets in order.
- A mismatch is fatal immediately because no future token can fix bracket order.

## Edge Cases

- Empty input is valid.
- A closing bracket without a matching opener fails immediately.
- Leftover openers at the end mean failure.

## Reflection

Bracket validity is the canonical stack warm-up because it demonstrates "last unmatched thing must resolve first."
