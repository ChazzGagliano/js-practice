function start_with(arr) {
    let count = 0;
    let i = 0
    while (i < arr.length) {
        if (arr[i].startsWith("a")) {
            count += 1;
        }
        i ++
    }
    return count;
}

const arr = ["apple", "bottom", "abercrombie"];
const result = start_with(arr);
console.log(result); 