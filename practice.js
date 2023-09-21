
// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

function numbersLessThan100(arr) {
    const result = arr.filter(function (number) {
      return number < 100;
    });
    return result;
  }
  

  const inputArray = [99, 101, 88, 4, 2000, 50];
  const filteredArray = numbersLessThan100(inputArray);
  console.log(filteredArray); 