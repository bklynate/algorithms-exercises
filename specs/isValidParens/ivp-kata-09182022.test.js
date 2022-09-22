const isValidParens = (s) => {
  if (s.length % 2 !== 0) return false;
  const hashMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (const char of s) {
    if (hashMap[char]) {
      stack.push(hashMap[char])
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

test('isValidParens', function () {
  expect(isValidParens('(){}[]')).toEqual(true);
  expect(isValidParens('(){}[]}{')).toEqual(false);
  expect(isValidParens('(({[][]({[}])}))')).toEqual(false);
});
