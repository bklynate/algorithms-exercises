const longestNonRepeatingSubstring = (s) => {
  let start = 0;
  let max = 0;
  const seenMap = {};
  for (let end = 0; end < s.length; end++) {
    if (seenMap[s[end]] !== undefined && seenMap[s[end]] >= start) {
      start = seenMap[s[end]] + 1;
    }
    
    seenMap[s[end]] = end;
    max = Math.max(max, end - start + 1)
  }
  return max;
}

test('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3)
})
