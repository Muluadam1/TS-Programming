function mergeSortedArrays<T>(arr1: T[], arr2: T[]): T[] {
    const mergedArray: T[] = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Copy remaining elements from arr1, if any
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Copy remaining elements from arr2, if any
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  //example
  const arr1 = [1, 3, 5, 7, 9];
  const arr2 = [2, 4, 6, 8, 10];
  const mergedArray = mergeSortedArrays(arr1, arr2);
  console.log(mergedArray); 
