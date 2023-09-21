
function doubleArrayValues(arr) {
  const doubledArray = arr.map(function (value) {
    return value * 2;
  });
  return doubledArray;
}


const inputArray = [4, 2, 5, 99, -4];
const doubledArray = doubleArrayValues(inputArray);
console.log(doubledArray); 