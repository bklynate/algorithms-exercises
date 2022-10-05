const isValidParens = string => {
  if (string.length % 2 !== 0) return false;
  const stack = []
  const hash = {
    '(':')',
    '[':']',
    '{':'}',
  }

  for (const char of string) {
    if (hash[char]) {
      stack.push(hash[char])
    } else if (stack.length >= 0 && char === stack[stack.length - 1]) {
      stack.pop()
    }
  }

  return stack.length === 0;
};

test('isValidParens', function () {
  expect(isValidParens('(){}[]')).toEqual(true);
  expect(isValidParens('(){}[]}{')).toEqual(false);
  expect(isValidParens('(({[][]({[}])}))')).toEqual(false);
});
