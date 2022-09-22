function quickSort(array) {
  const length = array.length;

  if (length < 2) return array;

  const pivot = array[length - 1];
  const left = [];
  const right = [];

  array.slice(0, length - 1).forEach(number => (number < pivot ? left.push(number) : right.push(number)));

  return [...quickSort(left), pivot, ...quickSort(right)];
}

test('quickSort', function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
