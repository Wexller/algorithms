export class ListNode {
  constructor(
    public value: number,
    public next: ListNode | null = null,
  ) {}
}

export function solve(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let step = 0; step <= n; step += 1) {
    fast = fast?.next ?? null;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }

  if (slow?.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}
