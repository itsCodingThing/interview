// You have a set of integers s, which originally contains all the numbers from 1 to n.
// Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
// which results in repetition of one number and loss of another number.
//
// You are given an integer array nums representing the data status of this set after the error.
//
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
//
//
//
// Example 1:
//
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:
//
// Input: nums = [1,1]
// Output: [1,2]
export function findErrorNums(nums: number[]): number[] {
	let dup = 0;
	let sum = 0;
	const n = nums.length;

	for (let i = 0; i < nums.length; i++) {
		const val = Math.abs(nums[i]);
		sum = sum + val;

		if (nums[val - 1] < 0) {
			dup = val;
		} else {
			nums[val - 1] *= -1;
		}
	}

	const expectedSum = (n * (n + 1)) / 2;
	const missing = dup + (expectedSum - sum);

	return [dup, missing];
}

export function findMaxConsecutiveOnes(nums: number[]): number {
	let count = 0;
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count = count + 1;
			max = Math.max(max, count);
		} else {
			count = 0;
		}
	}

	return max;
}

export function shuffle(nums: number[], n: number): number[] {
	const arr: number[] = [];

	for (let i = 0; i < n; i++) {
		arr.push(nums[i]);
		arr.push(nums[n + i]);
	}

	return arr;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
