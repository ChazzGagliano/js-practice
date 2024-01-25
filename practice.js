function sum(array) {
    let i = 0
    let count = 0

    while (i < array.length) {
        if (array[i].startsWith("a")) {
            count += 1
        }
        i ++
    }
    return count
}

array = ["apple", "bone", "arrow"]

console.log(sum(array))