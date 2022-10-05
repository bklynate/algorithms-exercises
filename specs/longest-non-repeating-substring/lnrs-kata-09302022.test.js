const longestNonRepeatingSubstring = s => {
  if (s.length < 2) return s;

  let start = 0;
  let max = 0;
  const seen = new Set();

  for (let end = 0; end < s.length; end++) {
    while (seen.has(s[end])) {
      seen.delete(s[start]);
      start++;
    }

    seen.add(s[end]);
    max = Math.max(max, end - start + 1)
  }

  return max
};

test('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3);
  expect(longestNonRepeatingSubstring('bbbbbb')).toEqual(1);
  expect(longestNonRepeatingSubstring('ab0c0ed')).toEqual(4);
  expect(longestNonRepeatingSubstring('abcabccba')).toEqual(3);
});
