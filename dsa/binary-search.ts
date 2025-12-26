// binary search works on sorted array
// remember [low, high)
export function binarySearch(arr: number[], target: number) {
	let low = 0;
	let high = arr.length;

	while (low < high) {
		const mid = Math.floor(low + (high - low) / 2);

		const m = arr[mid];
		if (!m) {
			return -1;
		}

		if (m === target) {
			return m;
		}

		if (target > m) {
			low = mid + 1;
		}

		if (target < m) {
			high = mid;
		}
	}

	return -1;
}
