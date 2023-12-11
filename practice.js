function maximus(array) {
    let i = 0
    let max_number = array[0]
    while(i < array.length) {
        if (max_number < array[i]) {
            max_number = array[i]
        }
        i ++
    }
    return max_number
}

array = [1, 2, 4, 5, 6, 3]
result = maximus(array)
console.log(maximus(array))