function min_number(array) {
    let minimum_number = array[0]
    let i = 0

    while (i < array.length) {

        if (minimum_number > array[i]) {
        minimum_number = array[i]
        }
        
        i ++
    }
    return minimum_number
}

array = [2, 4, 8, 1]
result = min_number(array)
console.log(result)