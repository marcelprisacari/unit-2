// IO & Callbacks

/* 
    * Process is an event that currently runs in the foreground or backgroud of your local machine. 

    * Node.js allows access to its processes via a process object.
*/


//  Import statement

/* let process = require("process")

console.log(process.pid) */

// Callback

/* 
    A "Listener" function that waits for an event and executes a function when it occurs.

    Takes two parameters:
        * event upon which to execute a function
        * function to be executed
*/

// console.log ("App running")

/* process.stdin.once("data", function (input) {
    console.log(`This is our input being repeated:, ${input.toString()}`)
    // Exits us out of the listener
    process.exit()
}) */

/* function x() {
    process.stdin.once("data", function (input) {
        console.log(`This is our input being repeated:, ${input.toString()}`)   
        // Exits us out of the listener
        })
}

x()

console.log("Code after the function") */

// ! Back to Fucntion Event
// ! Function Declaration

// ! hoisted

function nameOfFunction(prameter) {
    return parameter
}

// ! Function Expressions
// ! not hoisted

let fxExpression = function (parameter) {
    return parameter
}

// !Arrow Function Expression
// ! ES6 version of concisely writting functions
// ! not hoisted; not bound to .this or applyy

// ? Concise Body Arrow Function
let arrowFunction = () => console.log("arrow function")
arrowFunction()

let arrowFxOneParam = param => console.log("This fx has one param")

let arrowFxManyparams = (param1, param2) => console.log("This fx has many params")

// Example:

// process.stdin.on("data", input => console.log(input.toString()))

// ? Block Body Arrow Function

// let blockBodyFx = () => {
//     console.log("Line 1")
//     console.log("Line 2")
// }

console.log("Testing");
(function() {
    console.log("IIFE")
}())

/* 
    ? Let's create a listener on stdin so that when we type something, it will reply with what we said plus some word.
*/

let handleInput = input => {
    console.log(input.toString().trim() + ", Cheers!")
}
// process.stdin.once("data", handleInput)
// console.log("What is your name?")
// process.stdin.on("data", (input) => {
//     process.stdout.write(`The input is: ${input.toString()}`)
// })

// ? Guess the Number Hint

// function guess(question) {
//     console.log(question)
//     let number
//     process.stdin.once("data", (input) => {
//         number = input.toString().trim()
//         process.stdout.write(`Your number was: ${number}`)
//     })

//     return number
// }
// ? Returns undefined, why?? HINT: Async functions
// console.log(guess("What is your number? "))

// Readline

const readline = require("readline")

let rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let solution = num1 + num2

rl.question(`What is the sum of ${num1} & ${num2}?`, (input) => {
    if (input.trim() == solution) {
        rl.setPrompt("Correct")
        rl.prompt()
        rl.close()
    }
})