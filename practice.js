function to_string(array) {
    let i = 0
    new_array = []
    while (i < array.length) {
    array[i] = array[i].toString()
    new_array.push(array[i])
    i ++
    }
    return new_array
}

array = [1, 2, 3, 4]
result = to_string(array)
console.log(result)