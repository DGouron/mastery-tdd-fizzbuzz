import { expect, test } from "vitest";

class Stack {
	private _elements: number[] = [];

	push(element: number) {
		this._elements.push(element);
	}
	size(): number {
		return this._elements.length;
	}

	pop() {
		return this._elements.pop();
	}

	peek() {
		return this._elements[this._elements.length - 1];
	}
}

test("an empty stack has a size of 0", () => {
	const stack = new Stack();
	expect(stack.size()).toBe(0);
});

test("a stack with one element has a size of 1", () => {
	const stack = new Stack();
	stack.push(0);

	expect(stack.size()).toBe(1);
});

test("a stack with two elements has a size of 2", () => {
	const stack = new Stack();
	stack.push(0);
	stack.push(1);

	expect(stack.size()).toBe(2);
});

test("when I pop an element from an empty stack, should return undefined", () => {
	const stack = new Stack();
	expect(stack.pop()).toBeUndefined();
});

test("when I push an element, it should be returned when I pop it", () => {
	const stack = new Stack();
	stack.push(75);
	expect(stack.pop()).toBe(75);
});

test("when I peek into an empty stack, should return undefined", () => {
	const stack = new Stack();
	expect(stack.peek()).toBeUndefined();
});

test("when I push an element, peeking should return that element", () => {
	const stack = new Stack();
	stack.push(75);
	expect(stack.peek()).toBe(75);
});
