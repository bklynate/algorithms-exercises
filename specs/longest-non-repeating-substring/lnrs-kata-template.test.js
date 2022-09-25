const longestNonRepeatingSubstring = s => {};

test.skip('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3);
  expect(longestNonRepeatingSubstring('bbbbbb')).toEqual(1);
  expect(longestNonRepeatingSubstring('ab0c0ed')).toEqual(4)
  expect(longestNonRepeatingSubstring('abcabccba')).toEqual(3);
});
