function product_arr(arr) {
    let product = 1
    let i = 0
    while (i < arr.length) {
        product *= arr[i]
        i ++
    }
    return product
}

arr = [1, 2, 3, 4]
result = product_arr(arr)
console.log(result)