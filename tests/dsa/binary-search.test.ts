import { test, expect, describe } from "bun:test";
import { binarySearch } from "@/dsa/binary-search";

describe("binary search", () => {
	test("when target is in the array", () => {
		const arr = [2, 3, 4, 5, 10, 12, 13, 15];
		const target = 13;

		const result = binarySearch(arr, target);
		expect(result).toEqual(target);
	});

	test("when target is not in the array", () => {
		const arr = [2, 3, 4, 5, 10, 12, 13, 15];
		const target = 20;

		const result = binarySearch(arr, target);
		expect(result).toEqual(-1);
	});
});
