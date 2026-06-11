class MinHeap {
  private readonly data: number[] = [];

  get size(): number {
    return this.data.length;
  }

  peek(): number | undefined {
    return this.data[0];
  }

  push(value: number): void {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): number | undefined {
    if (this.data.length === 0) {
      return undefined;
    }

    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0 && last !== undefined) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(index: number): void {
    let current = index;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.data[parent] <= this.data[current]) {
        break;
      }
      [this.data[parent], this.data[current]] = [
        this.data[current],
        this.data[parent],
      ];
      current = parent;
    }
  }

  private bubbleDown(index: number): void {
    let current = index;
    while (true) {
      const left = current * 2 + 1;
      const right = left + 1;
      let smallest = current;

      if (left < this.data.length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
      if (right < this.data.length && this.data[right] < this.data[smallest]) {
        smallest = right;
      }

      if (smallest === current) {
        break;
      }

      [this.data[current], this.data[smallest]] = [
        this.data[smallest],
        this.data[current],
      ];
      current = smallest;
    }
  }
}

export function solve(values: number[], k: number): number {
  const heap = new MinHeap();

  for (const value of values) {
    heap.push(value);
    if (heap.size > k) {
      heap.pop();
    }
  }

  return heap.peek() ?? Number.NaN;
}
