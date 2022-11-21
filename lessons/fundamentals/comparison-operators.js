var helicopter1 = "BlackHawk";
var helicopter2 = "bLaCkHawk";

var stringThree = "3"
var numberThree = 3
console.log(helicopter1 == helicopter2); // output: false
console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase()); // output: true

//  Double equal signs will compare the value and doesn't care about the data type
console.log(
  "stringThree and numberThree with two equal",
  stringThree == numberThree
); // true

//  3 equals signs will compare Type and Value
console.log(
    "stringThree and numberThree with three equal",
    stringThree === numberThree
  ); // false

//  Not Operator
//  != only looks at teh value and doesn't care about the data type
console.log("Not equal helicopter", helicopter1 != helicopter2); //output: true
// prettier-ignore
console.log("Not equal stringThree and numberThree", stringThree !== numberThree) //output: true

// greater than

console.log("greater than", 10 > 2); // output: true
//  less than
console.log("less than", 10 < 2); // output: false

//greater than or equal >=

console.log("greater than or equal", 4 >= 4); //output: true

//  less than or equal <=
console.log("less than or equal", "2" <= 4); //output: true

// Logical Operators

var num1 = 6;
var num2 = 3;
console.log("And Operator");
console.log(num1 < 10 && num2 > 1); // output: true
console.log("Or Operator");
console.log(num1 === 4 || num2 === 6); // output: false
console.log(num1 === 6 || num2 === 6); // output: true

