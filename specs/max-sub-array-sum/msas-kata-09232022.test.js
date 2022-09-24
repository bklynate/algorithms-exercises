/* 
  Given an array of integers and a number
  create a function called maxSubarraySum 
  maxSubarraySum finds the maximum sum of a subarray
  with the length of the number passed to the function.

  Note that a subarray must consist of consecutive elements from the original array. 
  In the first example below, [100, 200, 300] is a subarray of the original array, 
  but [100, 300] is not.
*/

function maxSubarraySum(array, num = 0) {
  if (array.length < num) return null;

  let total = 0

  for (let i = 0; i < num; i++) {
    total += array[i];
  }

  currentTotal = total;

  for (let i = num; i < array.length; i++) {
    currentTotal += array[i] - array[i - num]
    total = Math.max(total, currentTotal);
  }

  return total;
}

test('maxSubarraySum', () => {
  expect(maxSubarraySum([2, 3], 3)).toEqual(null);
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
});
