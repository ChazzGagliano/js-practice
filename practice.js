function sum_array(arr) {
    let sum = 0
    let i = 0
    while (i < arr.length) {
        sum += arr[i]
        i ++
    }
    return sum
}

arr = [1, 2, 3, 4]
result = sum_array(arr)
console.log(result)