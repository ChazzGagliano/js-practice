function max_number(arr) {
    let max = arr[0]
    let i = 0
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i]
        }
        i ++
    }
    return max
}


const inputArray = [5, 17, -4, 20, 12];
const result = max_number(inputArray);
console.log(result); 