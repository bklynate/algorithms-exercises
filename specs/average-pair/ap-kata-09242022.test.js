/*
  Create a function called averagePair. 
  Given a sorted array of integers and a target average...
  determine if there is a pair of values in the array... 
  where the average of the pair equals the target average. 
  There may be more than one pair that matches the average target.
*/

function averagePair(sortedArr, num) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start < end) {
    const avg = (sortedArr[start] + sortedArr[end]) / 2;

    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

test('averagePair', () => {
  expect(averagePair([1, 2, 3], 2.5)).toEqual(true); // true
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true); // true
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toEqual(false); // false
  expect(averagePair([], 4)).toEqual(false); // false
});
