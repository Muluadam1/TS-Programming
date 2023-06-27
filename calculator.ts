/*Implement a TypeScript class representing a basic calculator with methods for addition, subtraction, 
multiplication, and division.*/
class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  console.log(calculator.add(7, 13));      
  console.log(calculator.subtract(19, 14)); 
  console.log(calculator.multiply(24, 45));  
  console.log(calculator.divide(17, 13));  