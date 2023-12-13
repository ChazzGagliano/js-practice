function toStrings(array) {
    let i = 0
    let new_array = []
    while( i < array.length) {
        array[i] = array[i].toString()
        new_array.push(array[i])
        i ++
    }
    return new_array
}

array = [1, 2, 3, 4]
console.log(toStrings(array))