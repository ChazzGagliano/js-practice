function productArr(arr) {
    product = 1
    i = 0
    while (i < arr.length) {
        product *= arr[i]
        i ++
    }
    return product
}

const arr = [1, 2, 3, 4]
result = productArr(arr)
console.log(result)