let handleInput = input => {
    console.log(input.toString().trim() + ", Cheers!")
}
process.stdin.on("data", handleInput)
console.log("What is your name?")