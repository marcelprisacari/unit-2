/* 
Var vs Let
- with the introduction of ES6 we now have keywords to use for variables "let" & "const"

- You can not reference a variable before it is initialized using LET
- When you reference a variable using VAR you are able to use it but you get undefined

*/
console.log("Before it is initialized", age);
var firstName = "Rob";
var age = 42;
let hairColor = "brown";

if (firstName == "Rob") {
  console.log(age);
  //   let age = 33;
  console.log(age);
} else {
}

console.log("AGE OUTSIDE OF IF STATEMENT", age);

// ! Another Example of Scope

const greeting = "Hello";

if (true) {
  console.log(greeting);
  //   const greeting = "Good Bye";
}

console.log(greeting);