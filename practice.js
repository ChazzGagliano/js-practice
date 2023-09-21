function sumArray(arr) {
    let sum = 0
    arr.forEach(function (element) {
        if (typeof element === 'number') {
            sum += element
        }
    })
    return sum
}

const numbers = [1, 2, 3, 4]
const result = sumArray(numbers)
console.log(result)