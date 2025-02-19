/*
  Create a function called averagePair. 
  Given a sorted array of integers and a target average...
  determine if there is a pair of values in the array... 
  where the average of the pair equals the target average. 
  There may be more than one pair that matches the average target.
*/

function averagePair(sortedArr) {}

test.skip('averagePair', () => {
  expect(averagePair([1, 2, 3], 2.5)).toEqual(true); // true
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true); // true
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toEqual(false); // false
  expect(averagePair([], 4)).toEqual(false); // false
});
