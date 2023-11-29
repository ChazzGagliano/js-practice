function mapLoop(array) {
    let sum = 0
   array.map(function (num) {
         sum += num
    })
    return sum
}
array = [1, 2, 3, 4]
results = mapLoop(array)
console.log(results)
