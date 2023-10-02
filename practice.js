function sumArray(arr) {
    let i = 0
    let sum = 0
    while ( i < arr.length) {
        sum += arr[i]
        i ++ 
    }
    return sum
}

 const arr = [1, 2, 3, 4]
 const result = sumArray(arr)
 console.log(result)