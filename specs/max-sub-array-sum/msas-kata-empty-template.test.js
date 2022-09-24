/* 
  Given an array of integers and a number
  create a function called maxSubarraySum 
  maxSubarraySum finds the maximum sum of a subarray
  with the length of the number passed to the function.

  Note that a subarray must consist of consecutive elements from the original array. 
  In the first example below, [100, 200, 300] is a subarray of the original array, 
  but [100, 300] is not.
*/

function maxSubarraySum(array, num = 0) {}

test.skip('maxSubarraySum', () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
  expect(maxSubarraySum([2, 3], 3)).toEqual(null);
});
