/* 
Bronze:
- initialize a variable called coinFlip.
- coinFlip can either be a 0 or a 1
- create an if-else block  - if coinFlip is equal to zero - console log - "Heads" else console log "Tails"

*/

/* 
Silver: 
- initialize a variable called headsOrTails and set it to null
- console.log headsOrTails outside and at the end of the if-else block
- if coinFlip is equal to zero - store the value of headsOrTails to "Heads" else it is "Tails"
*/

/* 
Gold:
- instead of making coinFlip a hard-coded value of 0 or 1. Make it a random number using Math.floor and Math.random

*/



var coinFlip = Math.floor(Math.random() * 2);

/* 
function randomNum(min, max) {
  let range = max - min + 1

  return Math.floor(Math.random() * range) + min
} 
*/
var headsOrTails = null
var heads = "Heads"
var tails = "Tails"
if(coinFlip == 0){
    (headsOrTails = heads)} 
    else {
    (headsOrTails = tails)
    };

console.log(headsOrTails);
