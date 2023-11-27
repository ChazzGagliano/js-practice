function greaterThan(array) {
    let i = 0
    let new_array = []
    while (i < array.length) {
        if (array[i] > 5) {
            new_array.push(array[i])
        }
        i ++
    }
    return new_array
}
array = [1, 4, 6, 5, 8]
result = greaterThan(array)
console.log(result)