const listOfNumbers = [50, 8, 71, 9, 30, 43];
let largest = listOfNumbers[0];
let i = 0;

const largerNumber = (arr) => {
  if (i < arr.length-1) {
    (largest > arr[i+1])
      ?  largest = largest
      :  largest = arr[i+1];
    i+=1;
    largerNumber(arr);
  }
}

largerNumber(listOfNumbers);
console.log(`The largest number in the list is: ${largest}`);