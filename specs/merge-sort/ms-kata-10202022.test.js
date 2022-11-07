/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (left, right) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      results.push(right.shift());
    } else {
      results.push(left.shift());
    }
  }
  return results.concat(left, right);
};

const mergeSort = nums => {
  // code goes here
  if (nums.length < 2) return nums;

  const length = nums.length;

  const mid = Math.floor(length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const ans = mergeSort(nums);

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
