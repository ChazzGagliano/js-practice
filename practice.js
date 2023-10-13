function pro_arr(arr) {
    let product = 1
    i = 0
    while (i < arr.length) {
        product *= arr[i]
        i ++
    }
    return product
}
arr = [7, 3, 4, 5]
result = pro_arr(arr)
console.log(result)


