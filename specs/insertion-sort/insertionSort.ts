function insertion_sort(numbers: number[]) {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = i; j > 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        const large = numbers[j - 1];
        const small = numbers[j];
        numbers[j] = large;
        numbers[j - 1] = small;
      }
    }
  }
  return numbers;
}

console.log(insertion_sort([11, 10, 5]))
