function findAverage(numbers) {
    let sum = 0;
    const count = numbers.length;
    for (let i = 0; i < count; i++) {
      sum += numbers[i];
    }
    const average = sum / count;
    return average;
  }

  const numbers = [1, 2, 3, 4, 5];
const average = findAverage(numbers);
console.log(average);
  