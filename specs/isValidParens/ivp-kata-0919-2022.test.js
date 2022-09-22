const isValidParens = (string) => {
  if (string.length % 2 !== 0) return false;
  const stack = [];
  const hashMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (const char of string) {
    // if the key/value pair exists in the hashmap
    // push that value of the key/value pair on to the stack
    if (hashMap[char]) {
      stack.push(hashMap[char]);
    }
    // if the stack has length and
    // the last item of the stack equals the char 
    // we want to pop it off the stack
    else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop()
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
