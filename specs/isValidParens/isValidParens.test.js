function isValidParens(string) {
  if (string.length % 2 !== 0) return false;

  while (string.includes('{}') || string.includes('[]') || string.includes('()')) {
    string = string
      .replace('{}', '')
      .replace('[]', '')
      .replace('()', '')
  }

  return string === ''
}


test('isValidParens', function () {
  expect(isValidParens('(){}[]')).toEqual(true);
  expect(isValidParens('(){}[]}{')).toEqual(false);
  expect(isValidParens('(({[][]({[}])}))')).toEqual(false);
});
