function sumArray(array) {
    let sum = 0
    i = 0

    while (i < array.length) {
    sum += array[i]
    i += 1
    }
    return sum
}

const numbers = [1, 2, 3, 4, 5]
const result = sumArray(numbers);
console.log(result)