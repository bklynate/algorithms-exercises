function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      results.push(right.shift());
    } else {
      results.push(left.shift());
    }
  }
  return results.concat(left, right)
}

function mergeSort(array) {
  const arrayLen = array.length;

  if (arrayLen < 2) return array;

  const mid = Math.floor(arrayLen / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right))
}

test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
