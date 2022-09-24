function areThereDuplicates(args) {
  // good luck. (supply any arguments you deem necessary.)
}

test.skip('areThereDuplicates', () => {
  expect(areThereDuplicates(1, 2, 3)).toEqual(false); // false
  expect(areThereDuplicates(1, 2, 2)).toEqual(true); // true
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true); // true
  expect(areThereDuplicates('a', 'b', 'c', 'd')).toEqual(false); // true
});
