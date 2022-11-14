/*
  Write a function called isSubsequence... 
  which takes in two strings...
  checks whether the characters in the first string...
  form a subsequence of the characters in the second string. 
  In other words, the function should check whether the characters...
  in the first string appear somewhere in the second string...
  without their order changing.
*/

function isSubsequence(str1, str2) { 
  let start = 0;
  let movingTarget = 0;

  while (movingTarget < str2.length) {
    if (str1[start] === str2[movingTarget]) start++
    if (start === str1.length) return true
    movingTarget++
  }
  return false
}

test('isSubsequence', () => {
  expect(isSubsequence('hello', 'hello world')).toEqual(true); // true
  expect(isSubsequence('sing', 'sting')).toEqual(true); // true
  expect(isSubsequence('abc', 'abracadabra')).toEqual(true); // true
  expect(isSubsequence('abc', 'acb')).toEqual(false); // false (order matters)
});
