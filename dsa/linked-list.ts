class Node {
  #data: number;
  #next: Node | null = null;

  constructor(data: number) {
    this.#data = data;
  }

  get next() {
    return this.#next;
  }

  set next(node: Node | null) {
    this.#next = node;
  }

  get data() {
    return this.#data;
  }

  set data(d: number) {
    this.#data = d;
  }
}

export class LinkedList {
  #cursor: Node | null = null;

  constructor() {
    this.#cursor = null;
  }

  insertAtHead(data: number) {
    const node = new Node(data);
    node.next = this.#cursor;

    this.#cursor = node;
  }

  insertAtTail(data: number) {
    const node = new Node(data);
    let current = this.#cursor;

    if (!current) {
      this.#cursor = node;
      return;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  insertAtIndex(data: number, pos: number) {
    const node = new Node(data);
    let current = this.#cursor;

    if (pos === 0) {
      this.insertAtHead(data);
      return;
    }

    let counter = 0;
    while (counter < pos && current) {
      current = current.next;
      counter++;
    }

    if (!current) return;

    node.next = current.next;
    current.next = node;
  }

  removeAtHead() {
    if (!this.#cursor) return;
    this.#cursor = this.#cursor.next;
  }

  removeAtTail() {
    let current = this.#cursor;
    if (!current) return;

    if (!current.next) {
      current.next = null;
      return;
    }

    while (current.next?.next) {
      current = current.next;
    }

    current.next = null;
  }

  removeAtIndex(pos: number) {
    if (pos === 0) {
      this.removeAtHead();
      return;
    }

    let current = this.#cursor;
    let counter = 0;
    while (counter < pos - 1 && current) {
      current = current.next;
      counter++;
    }

    if (!current) return;
    current.next = current.next?.next ?? null;
  }

  print() {
    let current = this.#cursor;
    let counter = 0;

    while (current) {
      console.log(`position: ${counter} value: ${current.data}`);
      current = current.next;
      counter++;
    }
  }
}
