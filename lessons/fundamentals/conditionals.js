/* 
Conditionals
- Conditionals are used for decision making
- Tools we have availble for decision making are the following:
   - if statements
   - if else statements
   - if else if statements
   - switch
   - ternary

*/

// ! Example of an if statement

var currentHour = 22;
var greeting = "";
// current hour is less than 12 store good morning in greeting
if (currentHour < 12) {
  // inbetween brackets is considered a block of code
  // this block of code will be executed if the conditional is true

  greeting = "Good Morning";
}
//! Example of if else


//  if the current hour is less than 12 say good morning else  say good afternoon
if (currentHour < 12) {
    greeting = "Good Morning";
  } else {
    //  block of code gets executed if the conditinal is NOT TRUE
    greeting = "Good Afternoon";
  }

//! Example if else if statement
//  If the hours are between 12-5 (12 or 17) greeting of "Good Afternoon" from the hours of greater than 17 to 24 greeting will be "Good Evening"
if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour <= 17) {
    greeting = "Good Afternoon";
  } else {
  // your final else statement can be viewed as a default condition if nothing matches
    greeting = "Good Evening";
  }
  
console.log(greeting);

// Code Refactoring If Statements

var isLightBulbOn = true;

if (isLightBulbOn === true) {
  console.log("Yes the light bulb is on!");
}

//  Refactored Code
if (isLightBulbOn) {
  console.log("Refactored - Yes the light bulb is on!");
}

// If the light bulb is off using NOT
if (isLightBulbOn !== true) {
    console.log("The light bulb is off");
  }
  
  // Refactored Code
  if (!isLightBulbOn) {
    console.log("Refactored - The light bulb is off");
  }
  
  var today = new Date()
  console.log (today)
  var currentSeconds = today.getSeconds()

  // ? Write an if statement to determine if the current seconds are odd or even.
  // ? If even - console.log ex: "The current seconds is 22 and is even"
  
  // ? If odd - console.log ex: "The current seconds is 23 and is odd"
  
  //  5/2 R 1
  //  22/2 R 0
  console.log("Remainder from the division", currentSeconds % 2);
  
  if (currentSeconds % 2 === 0) {
    console.log(`The current second is ${currentSeconds} and it is even`);
  } else {
    console.log(`The current second is ${currentSeconds} and it is odd`);
  }

  // ! Ternary Statements

var age = 20;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}
// 1. Conditional
// 2. What you want to happen if it is true
// 3. What you want to happen if it is false
// (1)         (2)                                    (3)
age >= 18 ? console.log("T: you can vote") : console.log("T: you can not vote");



// ! Switch Statement
 
let month = "Oct";
let totalNumberofDays = 0;
switch (month) {
  case "Dec":
  case "Jan":
    totalNumberofDays = 31;
    break;
  case "Feb":
    totalNumberofDays = 28;
    break;
  default:
    totalNumberofDays = "Month did not match";
}

console.log(totalNumberofDays);