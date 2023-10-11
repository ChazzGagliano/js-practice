
  
  function stringArray(array) {
    let string = []
    i = 0
    while (i < array.length) {
        string.push(array[i].toString())
        i ++
    }
    return string
}

array = [1, 2, 3, 4]
result = stringArray(array)
console.log(result)



