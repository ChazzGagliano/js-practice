function start_with(array) {
    let count = 0
    let i = 0
    while (i < array.length) {
        if (array[i][0].startsWith("a")) {
            count += 1
        }
        i ++
    }
    return count
}

array = ["apple", "orange", "april"]
result = start_with(array)
console.log(result)