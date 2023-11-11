function product_array(array) {
    let product = 1
    let i = 0
    while (i < array.length) {
        product *= array[i]
        i ++
    }
    return product 
}
array = [1, 2, 3, 4]
result = product_array(array)
console.log(result)