
function productArray(arr) {
    let product = 1;
    let i = 0;
    while (i < arr.length) {
      product *= arr[i];
      i++;
    }
    return product;
  }

  const numbers = [1, 2, 3, 4, 5];
  const result = productArray(numbers);
  console.log(result); 