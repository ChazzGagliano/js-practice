function startwithB(array) {
    let count = 0
    let i = 0

    while (i < array.length) {
        if (array[i][0].startsWith("b")) {
            count += 1
        }
        i ++
    }
    return count
}

array = ["apple", "bottom", "jeans"]
results = startwithB(array)
console.log(results)