function toStrings(array) {
    let new_array = []
    let i = 0
    while(i < array.length) {
        array[i] = array[i].toString()
        new_array.push(array[i])
        i ++
    }
    return new_array
}

array = [1, 2, 3, 4]
console.log(toStrings(array))