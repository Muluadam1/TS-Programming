function isPrime(number: number): boolean {
    if (number <= 1) {
      return false;
    }
  
    // Check divisibility from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  //Example
  console.log(isPrime(7)); 
  console.log(isPrime(15)); 
  console.log(isPrime(29)); 
  console.log(isPrime(1)); 
