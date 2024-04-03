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

// function product_array(array) {
//     let p = 1
//     for (let i = 0; i < array.length; i ++) {
//         p *= array[i]
//     }
//     return p
// }

// array = [1, 2, 3, 4, 5]
// console.log(product_array(array))


// 8) Write a function that takes in an array of numbers and returns the two smallest numbers.

    // function smallest_number(array) {
    //     let min_num = array[0]

    //     for (let i = 0; i < array.length; i ++) {
    //         if (min_num > array[i]) {
    //             min_num = array[i]
    //     }
    // }
    // array.splice(array.indexOf(min_num), 1)

    //     let min_num_2 = array[0]
    //     for (let i2 = 0; i2 < array.length; i2 ++) {
    //         if (min_num_2 > array[i2]) {
    //             min_num_2 = array[i2]
    //         }
    //     }
    //     return [min_num, min_num_2]
    // }
    // array = [11, 12, 13, 10, 17, 0]
    // console.log(smallest_number(array))

// 9) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// function total_zeros(array) {
//     let count = 0
//     for (let i = 0; i < array.length; i ++) {
//                     if (array[i] === 0) {
//                         count += 1
//                     }
//             }
//     return count
// }

// array = [11, 12, 13, 10, 17, 0]
// console.log(total_zeros(array))

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

// array = ["hia", "battom", "jean"]
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
// const checkboard = (board) => {

    
//     for (let i = 0; i < board.length; i ++) {
//             if (board[i][0] === board[i][1] && board[i][i] === board[i][2]) {
//                 return `${board[i][0]} wins!`
//             }
            
//     }

//         if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
//             return `${board[0][0]} wins!`
//         }


//         if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
//             return `${board[0][2]} wins!`
//         }
    

//     for (let i = 0; i < board.length; i ++) {
//         if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
//             return `${board[0][i]} wins!`
//         }
//     }
// }

// let board = [
//     ["o", "x", "o"],
//     ["x", "o", "x"],
//     ["x", "x", "x"]
// ]



// console.log(checkboard(board))

// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

// Push even numbers into a new array

// function even_array(array) {
//     let new_array = []
//     for (i = 0; i < array.length; i ++) {
//         if (array[i] % 2 === 0) {
//             new_array.push(array[i])
//         }
//     }
//     return new_array
// }

// array = [1, 2, 3, 4, 6, 7, 10, 12, 0]
// console.log(even_array(array))

// function number_array(array, number) {
//     for (i = 0; i < array.length; i ++) {
//         if (array[i] == number) {
//             return i
//         }
//     }
//     return -1
// }


    // let blue = "blue"
    // let red = "red"
    // let green = "green"
    // let new_array = []

    // for (i = 0; i < 100; i ++) {
    //     if (i <= 50) {
    //         new_array.push(blue)
    //     }
    //    else if (i <= 80) {
    //         new_array.push(red)
    //     }
    //    else if (i <= 100) {
    //         new_array.push(green)
    //     }
    // }

 

    // var item = new_array[Math.floor(Math.random()*new_array.length)];
    // console.log(item)


    function x_scanner(array) {
        for (i = 0; i < array.length; i ++) {
            for (i2 = 0; i2 < array.length; i2 ++) {
                if (array[i][i2] === "x") {
                    return "access denied"
                }
            }
        }
        return "access granted"
    }

    array = ["hello", "oxy", "apple"]
    console.log(x_scanner(array))
