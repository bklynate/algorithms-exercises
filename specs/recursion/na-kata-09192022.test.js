const nestedAdd = array => {
  let sum = 0;
  array.forEach((i) => {
    if (Array.isArray(i)) sum += nestedAdd(i);
    if (Number.isInteger(i)) sum += i;
  })

  return sum;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
