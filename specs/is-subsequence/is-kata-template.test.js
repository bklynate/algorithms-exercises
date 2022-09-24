/*
  Write a function called isSubsequence... 
  which takes in two strings...
  checks whether the characters in the first string...
  form a subsequence of the characters in the second string. 
  In other words, the function should check whether the characters...
  in the first string appear somewhere in the second string...
  without their order changing.
*/

function isSubsequence(str1, str2) { }

test.skip('isSubsequence', () => {
  expect(isSubsequence('hello', 'hello world')).toEqual(true); // true
  expect(isSubsequence('sing', 'sting')).toEqual(true); // true
  expect(isSubsequence('abc', 'abracadabra')).toEqual(true); // true
  expect(isSubsequence('abc', 'acb')).toEqual(false); // false (order matters)
});
