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
	#head: Node | null = null;

	constructor() {
		this.#head = null;
	}

	insertAtHead(data: number) {
		const node = new Node(data);
		node.next = this.#head;

		this.#head = node;
	}

	insertAtTail(data: number) {
		const node = new Node(data);
		let current = this.#head;

		if (!current) {
			this.#head = node;
			return;
		}

		while (current.next) {
			current = current.next;
		}

		current.next = node;
	}

	insertAtIndex(data: number, pos: number) {
		const node = new Node(data);
		let current = this.#head;

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
		if (!this.#head) return;
		this.#head = this.#head.next;
	}

	removeAtTail() {
		let current = this.#head;
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

		let current = this.#head;
		let counter = 0;
		while (counter < pos - 1 && current) {
			current = current.next;
			counter++;
		}

		if (!current || !current.next) return; // out of range
		current.next = current.next.next;
	}

	reverse() {
		let prev = null;
		let current = this.#head;

		while (current) {
			const next = current.next;

			current.next = prev;
			prev = current;
			current = next;
		}

		this.#head = prev;
	}

	print() {
		let current = this.#head;
		let counter = 0;

		while (current) {
			console.log(`position: ${counter} value: ${current.data}`);
			current = current.next;
			counter++;
		}
	}
}
