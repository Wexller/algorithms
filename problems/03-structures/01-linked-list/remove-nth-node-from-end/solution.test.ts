import { describe, expect, it } from "vitest";
import { ListNode, solve } from "./solution";

function fromArray(values: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}

describe("Remove Nth Node From End", () => {
  it("removes a middle node", () => {
    expect(toArray(solve(fromArray([1, 2, 3, 4, 5]), 2))).toEqual([1, 2, 3, 5]);
  });

  it("removes the head", () => {
    expect(toArray(solve(fromArray([1]), 1))).toEqual([]);
  });

  it("removes the tail", () => {
    expect(toArray(solve(fromArray([1, 2]), 1))).toEqual([1]);
  });
});
