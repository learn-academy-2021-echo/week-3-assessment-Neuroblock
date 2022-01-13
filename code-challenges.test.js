// ASSESSMENT 3: Coding Practical Questions with Jest

// const { sequenceExpression } = require("babel-types");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// PSEUDO /////////////

// The following paragraph is the blueprint to run the tests

// describe("name of function",() => {
//     it ("description of functionanlity what iy does", () => {
//         expect ("invoke function").toEqual("expected result")
//     })
// }



describe("fib", () => {
    it("takes a number greater than 2 and returns an array", () => {
        expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
    })
})

describe("fib", () => {
    it("takes a number greater than 2 and returns an array", () => {
        expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})



// b) Create the function that makes the test pass.

// PSEUDO // :

// need a function with a loop that will iterate no more times than the value given
// need to declare a variable that will hold the first 2 numbers
// need to declare a variable that will hold the starting indexes of the array
//need a loop that will initialize the iteration of the array values
//use a for loop to iterate through the array
//Within the for loop is where am not seeing the mechanics of the loop
//i let the index start at 2, index will be less than the total number
//within the code block the values in "seq" is passd through and pushed.
//Having the it start at two requires reducing the index value of 2 to 1 and 2 to 0



function fib(nums) {

    let seq = [1, 1];
    let data = [seq[0], seq[1]];

    for (let i = 2; i < nums; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
        data.push(seq[i]);
    }
    return data;
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

describe("odds", () => {
    it("returns odds", () => {
        expect(odds(fullArr1)).toEqual([-9, 7, 9, 199])
    })
})

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("odds", () => {
    it("returns odds", () => {
        expect(odds(fullArr2)).toEqual([-823, 7, 23])
    })
})


// b) Create the function that makes the test pass.

// PSEUDO // :

// from an array of different types
// need a function that will filter out odd numbers
// return the input value sorted from smallest to greatest

const odds = (arrayOfThings) => {
    let arrayOfodds = arrayOfThings.filter((value) => {

        return (value % 2 !== 0 && typeof value === "number")
    })

    return arrayOfodds.sort((a, b) => a - b)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

describe("arraySum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    })
})

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

describe("arraySum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    })
})

var numbersToAdd3 = []
// Expected output: []

describe("arraySum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        expect(arraySum(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.

// takes in the first index and adds it to the second index.
// takes the sum of the first 2 indexes and adds it to the third index
// takes the sum of the second and third index sum and adds it to the fourt index
// use a for loop that takes a number from index:0
// increase the number by 1
// in the code block asign array index with added number
// push the added number

const arraySum = (sumArray) => {
    let total = []
    let num = 0
    for (let i = 0; i < sumArray.length; i++) {
        num = sumArray[i] + num
        total.push(num)
    }
    return total
}