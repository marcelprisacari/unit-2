/* 
!BRONZE
Write two variables. One of those variables will store your name. The other variable will store the name of a friend.

Find out what property you can use to check how long their name is, as well as your own.

Goal: console.log how many letters each of the names are...
*/

let myName = "Marcel"
let friendName = "David"

console.log (myName.length)
console.log (friendName.length)

/*
!SILVER

Write a conditional to see who has the longer name.
    -Use string interpolation to console.log whose name is longer
    -Ex: My name is longer than Adam's
*/

if (myName.length > friendName.length) {
    console.log ("My name is longer than my friend's name")
} else {
    console.log ("My name is shorter than my friend's name")
}

/*
!GOLD
In the console include how many letters difference there are between the names.

Example: Adam's name is shorter than mine by 4 letters. 

*There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional.

*/
let difference = myName.length - friendName.length

if (difference > 0) {
    console.log ("My name is longer than my friend's name by", difference, "letter")
} else {
    console.log ("My friend's name is longer than my name by", Math.abs(difference), "letter")
}

