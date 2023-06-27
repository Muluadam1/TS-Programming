/*Write a TypeScript function to check if a given string is a palindrome (reads the same forward and backward).*/

function isPalindrome(input: string): boolean {
    const sanitizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    const reversedInput = sanitizedInput.split('').reverse().join('');
  
    return sanitizedInput === reversedInput;
  }
  
  const string1: string = "racecar";
  const string2: string = "Hello, World!";
  console.log(isPalindrome(string1));
  console.log(isPalindrome(string2)); 