function greaterThan(array) {
    let new_array = []
    let i = 0
    while(i < array.length) {
        if (array[i] > 5) {
            new_array.push(array[i])
        }
        i ++
    }
    return new_array
}

array = [1, 7, 3, 6]
results = greaterThan(array)
console.log(results)