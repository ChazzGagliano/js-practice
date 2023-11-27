function startWith(array) {
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

array = ["apple", "bottle", "angry"]
result = startWith(array)
console.log(result)

