function longestNonRepeatingSubstring(string) {
  let start = 0;
  let max = 0;
  const seen = new Set();

  for (let i = 0; i < string.length; i++) {
    while (seen.has(string[i])) {
      seen.delete(string[start]);
      start++;
    }

    seen.add(string[i]);
    max = Math.max(max, i - start+1)
  }

  return max
}

test('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3)
  expect(longestNonRepeatingSubstring('ab0c0ed')).toEqual(4)
})
