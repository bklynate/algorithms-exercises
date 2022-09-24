/* 
  Write a function called sameFrequency. 
  Given two positive integers
  find out if the two numbers have the same frequency of digits.

  Your solution MUST have the following complexities: Time: O(N)
*/

function sameFrequency(n1, n2) {
  
}

test.skip('sameFrequency', () => {
  expect(sameFrequency(22, 222)).toEqual(false); // false
  expect(sameFrequency(34, 14)).toEqual(false); // false
  expect(sameFrequency(182, 281)).toEqual(true); // true
  expect(sameFrequency(3589578, 5879385)).toEqual(true); // true
});
