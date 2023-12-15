function max_pair(array) {
    sum = []
    for (let i = 0; i < array.length; i++ ) {
        for (let i2 = 0; i2 < array.length; i2 ++ ) {
            sum.push(array[i] - array[i2])
        }
    }
    max = sum[0]
    index = 0
    while (index < sum.length) {
        if (max < sum[index]) {
            max = sum[index]
        }
        index ++
    }
    return max
}

array = [1, 4, 20, 3, 9, 8]
console.log(max_pair(array))
console.log(sum)