// 1) Write a function that takes in an array of numbers and returns its sum.

// function sum_array(array) {
//     let count = 0
//     let i = 0 

//     while (array.length > i) {
//         count += array[i]
//         i ++
//     }
//     return count
// }
// array = [1, 2, 3, 4, 5]
// console.log(sum_array(array))

// function sum_array(array) {
//         let count = 0
//         for (let i = 0; i < array.length; i ++) {
//             count += array[i]
//         }
//     return count
// }
// array = [1, 2, 3, 4, 5]
// console.log(sum_array(array))


// 2) Write a function that takes in an array of strings and returns the smallest string.

// function minimum_string(array) {
//     let string = array[0]

//     for (let i = 0; i < array.length; i ++) {
//         if (string.length > array[i].length) {
//             string = array[i]
//         }
//     }
//     return string
// }

// array = ["hi", "bottom", "jean"]
// console.log(minimum_string(array))


// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function reverse_array(array) {
//     let new_array = []

//     for (let i = array.length - 1; i >= 0 ; i --) {
//         new_array.push(array[i])
//     }
//     return new_array
// }

// array = [1, 2, 3, 4, 5]
// console.log(reverse_array(array))



// 5) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// function starts_with(array) {
//     count = 0

//     for (let i = 0; i < array.length; i ++) {
//         if (array[i][0] === "a") {
//             count += 1
//         }
//      }
//      return count 
// }


// 6) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

    // function sentence_string(array) {
    //     count = ""
    //     for (let i = 0; i < array.length; i ++) {
    //         if (i == array.length - 1) {
    //             count = count + `${array[i]}`
    //         }
    //         else {
    //             count = count + `${array[i]}, `
    //         }
    //     }
    //     return count 
    // }
    // array = ["hi", "bottom", "jean"]
    // console.log(sentence_string(array))


// 7) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).


// 8) Write a function that takes in an array of numbers and returns the two smallest numbers.


// 9) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.


// 10) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// function ten_array(array) { 
//     for (let i = 0; i < array.length; i ++) {
//         if (array[i] < 10) {
//             return false 
//         }
        

        
//     }
//     return true
// }

// array = [11, 12, 13, 14, 17]
// console.log(ten_array(array))

// 11) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.

// function total_a(array) {
//     let count = 0
//     for (let i = 0; i < array.length; i ++) {
//         for (let i2 = 0; i2 < array[i].length; i2 ++) {
//             if (array[i][i2] === "a") {
//                 count += 1
//             }
//         }
//     }
//     return count
// }

// array = ["hi", "battom", "jean"]
// console.log(total_a(array))

// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome.

// function palindrome_string(string) {
//     return string == string.split("").reverse().join("")
// }

// string = "racecar"
// console.log(palindrome_string(string))

// Write a function to generate/print/store the first “n” prime numbers.

// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.



