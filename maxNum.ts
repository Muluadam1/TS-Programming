/*
Write a TypeScript function to find the maximum number in an array of numbers.*/
function findMaxNumber(numbers: number[]): number | undefined {
    if (numbers.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let maxNumber: number = numbers[0]; // Assume the first number is the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; // Update maxNumber if a larger number is found
      }
    }
  
    return maxNumber;
  }
  
  const numbers: number[] = [101, 235, 281, 153, 133, 202];
  const maxNumber: number | undefined = findMaxNumber(numbers);
  
  if (maxNumber !== undefined) {
    console.log(`The maximum number is: ${maxNumber}`);
  } else {
    console.log("The array is empty.");
  }