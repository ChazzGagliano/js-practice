function start_with(array) {
    let i = 0
    let count = 0
    while(i < array.length) {
        if (array[i][0].startsWith("a")) {
            count += 1
        }
        i ++
    }
    return count
}

array = ["apple", "bottom", "jeans", "abel"]
console.log(start_with(array))