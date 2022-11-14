/*

  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

*/

function longestCommonPrefix(arr) {
  let mainActor = arr[0] // flower
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(mainActor) !== 0) {
      mainActor = mainActor.substring(0, mainActor.length - 1);
    }
  }
  return mainActor;
}

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  expect(longestCommonPrefix(['dog', 'butt', 'cat'])).toEqual('');
});
