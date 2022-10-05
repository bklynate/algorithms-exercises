const longestNonRepeatingSubstring = s => {
  let start = 0;
  let max = 0;
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    while (seen.has(s[i])) {
      seen.delete(s[start]);
      start++;
    }

    seen.add(s[i]);

    max = Math.max(max, i - start + 1)
  }

  return max;
};

test('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3);
  expect(longestNonRepeatingSubstring('bbbbbb')).toEqual(1);
  expect(longestNonRepeatingSubstring('ab0c0ed')).toEqual(4)
  expect(longestNonRepeatingSubstring('abcabccba')).toEqual(3);
});
