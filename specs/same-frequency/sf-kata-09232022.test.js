/* 
  Write a function called sameFrequency. 
  Given two positive integers
  find out if the two numbers have the same frequency of digits.

  Your solution MUST have the following complexities: Time: O(N)
*/

function sameFrequency(n1, n2) {
  const freqCount1 = {};
  const freqCount2 = {};

  const n1AsString = String(n1);
  const n2AsString = String(n2);

  if (n1AsString.length !== n2AsString.length) return false;

  for (let i = 0; i < n1AsString.length; i++) {
    if (!freqCount1[n1AsString[i]]) {
      freqCount1[n1AsString[i]] = 1
    } else {
      freqCount1[n1AsString[i]] += 1
    }
  }

  for (let i = 0; i < n2AsString.length; i++) {
    if (!freqCount2[n2AsString[i]]) {
      freqCount2[n2AsString[i]] = 1
    } else {
      freqCount2[n2AsString[i]] += 1
    }
  }

  for (let charCount in freqCount1) {
    if (freqCount1[charCount] !== freqCount2[charCount]) {
      return false;
    }
  }

  return true;
}

test('sameFrequency', () => {
  expect(sameFrequency(22, 222)).toEqual(false); // false
  expect(sameFrequency(34, 14)).toEqual(false); // false
  expect(sameFrequency(182, 281)).toEqual(true); // true
  expect(sameFrequency(3589578, 5879385)).toEqual(true); // true
});
