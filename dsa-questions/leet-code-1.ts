// two crystall ball problem
// expample: [false, false, false, true, true]
// solution = 2
export function twoCrystalBall(breaks: boolean[]) {
	const jump = Math.floor(Math.sqrt(breaks.length));

	let i = jump;
	while (i < breaks.length) {
		if (breaks[i]) {
			break;
		}
		i = i + jump;
	}

	i = i - jump;
	let j = 0;

	while (j < jump && i < breaks.length) {
		if (breaks[i]) {
			return i;
		}

		j++;
		i++;
	}

	return -1;
}

// Merge Two Sorted Arrays
// Problem:
// Merge two sorted arrays nums1 and nums2 into one sorted array in-place inside nums1.
// Example:
// Input:
// nums1 = [1,2,3, 0, 0, 0]
// nums2 = [2,5,6]
// Output: [1,2,2,3,5,6]
export function merge2SortedArray(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
) {
	let k = m + n - 1;
	let i = m - 1;
	let j = n - 1;

	while (j >= 0) {
		if (i >= 0 && nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}

		k--;
	}
}

// Container With Most Water
// Problem:
// Given n non-negative integers height[i], find two lines that together with the x-axis form a container storing maximum water.
// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49
export function maxAreaBetweenHeights(heights: number[]) {
	let right = heights.length - 1;
	let left = 0;
	let maxArea = 0;

	while (left < right) {
		const width = right - left;

		// key point is the min height represent common height
		const currentArea = Math.min(heights[left], heights[right]) * width;

		// replace max area
		maxArea = Math.max(currentArea, maxArea);

		if (heights[left] < heights[right]) {
			left++;
		} else {
			right--;
		}
	}

	return maxArea;
}

// Reverse String
//
// Problem:
// Write a function that reverses a string in-place using two pointers.
//
// Example:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
export function reverseInPlace(arr: number[]) {
	const mid = Math.floor(arr.length / 2);
	let temp = 0;

	for (let i = 0; i < mid; i++) {
		const last = arr.length - 1 - i;

		temp = arr[i];
		arr[i] = arr[last];
		arr[last] = temp;
	}
}

// Problem:
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true
export function checkPalindrome(str: string) {
	const mid = Math.floor(str.length / 2);

	for (let i = 0; i < mid; i++) {
		const last = str.length - 1 - i;

		if (str[i] !== str[last]) return false;
	}

	return true;
}
