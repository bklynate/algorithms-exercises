const getLongestNonRepeatingString = (string) => {
  let start = 0;
  let max = 0;
  const seen = new Set();

  for (let end = 0; end < string.length; end++) {
    while(seen.has(string[end])) {
      seen.delete(string[end]);
      start++
    }

    seen.add(string[end]);
    max = Math.max(max, end - start + 1);
  }

  return max;
}

getLongestNonRepeatingString('abc')
