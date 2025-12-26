// Stack using linked list
// Stack is lifo(last in first out)

class SNode<T> {
	value: T;
	next: SNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

export class Stack<T> {
	length: number;

	private head: SNode<T> | null;

	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(value: T) {
		const node = new SNode(value);
		this.length += 1;

		if (!this.head) {
			this.head = node;
			return;
		}

		node.next = this.head;
		this.head = node;
	}

	pop() {
		if (!this.head) {
			return null;
		}
		this.length -= 1;

		const head = this.head;
		this.head = this.head.next;

		return head.value;
	}
}
