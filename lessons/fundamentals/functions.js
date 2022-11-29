/* 
Functions

- Functions provide a block of code that will only be ran when it is called upon
- It starts with the keyword function followed by the name that you give it
- functions do not need to have parameters
- functions do not need to return a value but often do
- functions get "HOISTED"
*/

/* 
1. key word function
2. function name (Camel Casing Rules)
3. No Parameters are expected

*/
// ? cCan we clal the function beforfe it is written

example1();

// (1) .   (2) . (3)
function example1() {
// any code inside here will be executed when the function is called
console.log("Example 1 function was executed");
}
// ! You MUST call the function in ordrer for it to be executed
example1();

/* 
Function with Parameters
1. function keyword
2. function name
3. parameter names separated by commas
*/
// (1)     (2)       (3)
function example2(param1, param2) {
    console.log("Example 2 function was executed");
    console.log("param1", param1);
    console.log("param2", param2);
  }
  
  example2(10, 5);
  example2("Rob", "Vanarsdall");
  
// ? Create a function that will add two numbers together and RETURN the sum

function sumTwoNumbers(number1, number2) {
    console.log("number1", number1, "number2", number2);
    let total = number1 + number2;
    return total;
  }
/* 
1. variable name
2. calling the function and storing the returned value
*/
//  (1) .   (2)
  let sum1 = sumTwoNumbers(15, 30);
  console.log("sum1", sum1);
  
  let sum2 = sumTwoNumbers(10, 5);
  console.log("sum2", sum2);

  //  Simplified Return Statement

function simpleAddFunction(num1, num2) {
    return num1 + num2;
  }
  
  let add1 = simpleAddFunction(5, 23);
  console.log(add1);
  

// ? Write a function that will take the parameters of length, width, height and return the volume of the cubiod.
// ? Store the returned value in a variable called volume1

function cubeDimensions (length, width, height) {
    let volumeCube = length * width * height;
    return volumeCube;
}

let volumeCube = cubeDimensions (3, 3, 4)
console.log(volumeCube);

function randomNum(min, max) {
  let range = max - min + 1;

  return Math.floor(Math.random() * range) + min;
}

const random1 = randomNum(1, 1000);
console.log(random1);

let randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber * 101);
