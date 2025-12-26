import { bubbleSortDesendingOrder } from "@/dsa/bubble-sort";
import { test, expect, describe } from "bun:test";

describe("bubble sort", () => {
	test("sorted array in decsending order", () => {
		const arr = [2, 3, 4, 5, 10, 12, 13, 15];
		const target = [15, 13, 12, 10, 5, 4, 3, 2];

		bubbleSortDesendingOrder(arr);

		expect(arr).toEqual(target);
	});

	test("unsorted array in decsending order", () => {
		const arr = [15, 2, 4, 5, 12, 10, 13, 3];
		const target = [15, 13, 12, 10, 5, 4, 3, 2];

		bubbleSortDesendingOrder(arr);

		expect(arr).toEqual(target);
	});
});
