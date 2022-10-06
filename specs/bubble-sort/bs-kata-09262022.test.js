/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  global test
*/

const bubbleSort = (arr) => {
  if (arr.length < 2) return arr;

  let times = arr.length - 1;

  while (times) {
    for (let i = 0; i < times; i++) {
      if (arr[i] > arr[i + 1]) {
        const large = arr[i]
        const small = arr[i + 1]
        arr[i] = small;
        arr[i+1] = large;
      }
    }
    times--
  }

  return arr;
}

console.log(bubbleSort([1, 3, 2]));

// unit tests
// do not modify the below code
test('bubble sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
