function longestNonRepeatingSubstring(str) {
  let start = 0;
  let max = 0;
  let string;
  const seen = new Set();

  for (let i = 0; i < str.length; i++) {
    while (seen.has(str[i])) {
      seen.delete(str[i]);
      start++;
    }

    if (max < i - start + 1) {
      string = str.slice(start, i+1);
    }
    seen.add(str[i]);
    max = Math.max(max, i - start + 1);
  }
  console.log(string)
  return max;
}


test('longestNonRepeatingSubstring', () => {
  expect(longestNonRepeatingSubstring('abcabcbb')).toEqual(3)
})

