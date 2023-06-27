/*Write a TypeScript function to remove duplicates from an array and return a new array 
without any duplicates.*/
/*function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 2, 4, 1, 5, 4];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
  
  const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
  const uniqueNames = removeDuplicates(names);
  console.log(uniqueNames); // Output: ["Alice", "Bob", "Charlie"]*/

  //alternative way
  function removeDuplicates<T>(array: T[]): T[] {
    const uniqueArray: T[] = [];
  
    for (const item of array) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
  }
  
  const number = [1, 2, 3, 2, 4, 1, 5, 4];
  const uniqueNumbers = removeDuplicates(number);
  console.log(uniqueNumbers); 
  
  const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
  const uniqueNames = removeDuplicates(names);
  console.log(uniqueNames); 
