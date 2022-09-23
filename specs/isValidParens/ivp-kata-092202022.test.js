const isValidParens = string => {
  if (string.length % 2 !== 0) return false;

  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) {
      stack.push(map[string[i]])
    } else if (stack.length > 0 && stack[stack.length - 1] === string[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

test('isValidParens', function () {
  expect(isValidParens('(){}[]')).toEqual(true);
  expect(isValidParens('(){}[]}{')).toEqual(false);
  expect(isValidParens('(({[][]({[}])}))')).toEqual(false);
});
