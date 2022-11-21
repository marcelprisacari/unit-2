/* 
Variables:

- Variables are name containers for storing data and values
- We can name our variables anything with a few exceptions
- We use these variables to reference them at a later time.
*/

/* 


You can start the declaration proces with a var, let, or const
- Variable Name sin Javascript should be Camel Cased: starts off lower case and each word is Capitalized there after.
ex: currentLivingAddress, currentHour, currentWeather, age, location
*/
// prettier-ignore
var firstName = "Marcel";
// (1) (2)  (3) (4)

/* 
1. Javascript Keyword to denote creation of variable (var, let, const)
2. The name of the variable that the developer will reference in order to grab athe value that is stored.
3. Assignment operator. 
4. Initial Value
*/

console.log ("Hello from console.log line: 27");
//  Ton run a Javascript file in terminal - use command : node [filename.js]
// Example: node variables.js
console.log(firstName);
console.log("Variable firstName:", firstName);

/* 
Variable Declaration:
- The declaration is to the left side of the operator
- This is where the variable is crated - it's not assigned a value yet.
- If no value is assigned to it becomes undefined

*/

// Just declared not assigned a value
var lastName;
console.log("Variable lasttName:", lastName);
// Value is assigned
var lastName = "Prisacari"
console.log("Variable lasttName:", lastName);
// Changed Value
lastName = "Smith";
console.log("Variable lastName", lastName);

let fruit = "Apple";
let snack = fruit;

console.log("fruit", fruit);

console.log("snack", snack);
fruit = "orange";

console.log("snack2", snack);

