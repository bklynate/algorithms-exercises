const isValidParens = (string) => {
  if (string.length % 2 !== 0) return false;

  const tracker = []
  const parenHash = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (const char of string) {
    if (parenHash[char]) {
      tracker.push(parenHash[char])
    } else if (tracker.length && tracker[tracker.length - 1] === char) {
      tracker.pop()
    }
  }

  return tracker.length === 0
}

test('isValidParens', function () {
  expect(isValidParens('(){}[]')).toEqual(true);
  expect(isValidParens('(){}[]}{')).toEqual(false);
  expect(isValidParens('(({[][]({[}])}))')).toEqual(false);
});
