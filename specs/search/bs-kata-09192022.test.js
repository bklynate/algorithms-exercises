const binarySearch = (id, arr) => {
  if (!arr.length) return null;

  const len = arr.length;
  const middle = Math.floor(len / 2);

  if (id === arr[middle].id) return arr[middle];

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  if (id < arr[middle].id) return binarySearch(id, left);
  return binarySearch(id, right);
  
}

test("binary search", function () {
  const lookingFor = { id: 23, name: "Brian" };
  expect(
    binarySearch(23, [
      { id: 1, name: "Sam" },
      { id: 3, name: "Sarah" },
      { id: 5, name: "John" },
      { id: 6, name: "Burke" },
      { id: 10, name: "Simona" },
      { id: 12, name: "Asim" },
      { id: 13, name: "Niki" },
      { id: 15, name: "Aysegul" },
      { id: 17, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 19, name: "Marc" },
      { id: 21, name: "Chris" },
      lookingFor,
      { id: 24, name: "Ben" }
    ])
  ).toBe(lookingFor);
});
