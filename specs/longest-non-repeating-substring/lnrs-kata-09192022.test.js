const longestNonRepeatingSubstring = s => {
  let start = 0;
  let max = 0;
  const seen = new Set();

  for (let end = 0; end < s.length; end++) {
    while (seen.has(s[end])) {
      seen.delete(s[end]);
      start++;
    }
    seen.add(s[end]); 
    max = Math.max(max, end - start + 1);
  }

  return max;
};

test('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3);
});
