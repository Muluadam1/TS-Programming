/*Write a TypeScript function to reverse a string without using the built-in reverse() method.*/
function reverseString(input: string): string {
    let reversedString: string = "";
  
    for (let i = input.length - 1; i >= 0; i--) {
      reversedString += input.charAt(i);
    }
  
    return reversedString;
  }
  
  const originalString: string = "Hello, TypeScript!";
  const reversedString: string = reverseString(originalString);
  
  console.log(reversedString);