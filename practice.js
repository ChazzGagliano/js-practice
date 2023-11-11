function sum_array(array) {
    let sum = 0
    let i = 0
    while (i < array.length) {
        sum += array[i]
        i ++
    }
    return sum
}

array = [1, 2, 3, 4]
result = sum_array(array)
console.log(result)