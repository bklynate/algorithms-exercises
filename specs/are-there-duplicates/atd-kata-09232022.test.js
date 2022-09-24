function areThereDuplicates(args) {
  // good luck. (supply any arguments you deem necessary.)
  const arr = [...arguments];
  const tracker = {};

  for (let i = 0; i < arr.length; i++) {
    if (!tracker[arr[i]]) {
      tracker[arr[i]] = 1;
    } else {
      tracker[arr[i]] += 1;
    }
  }

  for (const val in tracker) {
    if (tracker[val] > 1) {
      return true;
    }
  }

  return false;
}

test('areThereDuplicates', () => {
  expect(areThereDuplicates(1, 2, 3)).toEqual(false); // false
  expect(areThereDuplicates(1, 2, 2)).toEqual(true); // true
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true); // true
  expect(areThereDuplicates('a', 'b', 'c', 'd')).toEqual(false); // true
});
