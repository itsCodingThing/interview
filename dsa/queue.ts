// Queue using linked list
// Queue is fifo(first in first out)

class QNode<T> {
	value: T;
	next: QNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

export class Queue<T> {
	length: number;

	private head: QNode<T> | null;
	private tail: QNode<T> | null;

	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	enqueue(value: T) {
		const node = new QNode(value);

		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}

		this.tail.next = node;
		this.tail = node;
		this.length += 1;
	}

	dequeue() {
		if (!this.head) {
			return null;
		}

		const current = this.head;
		this.head = this.head.next;

		this.length -= 1;
		return current.value;
	}
}
