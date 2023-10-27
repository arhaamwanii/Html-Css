// var random = Math.random();
// console.log(random);

// n = random * 10;
// console.log(n);
// n = Math.floor(n);
// console.log(n);


// Generates a random number between min (inclusive) and max (exclusive)
// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// var randomNumber = getRandomNumber(1, 100); // Generates a random number between 1 and 10
// let y =  (console.log(Math.round(randomNumber)));

// if (y < 10){
//     console.log("less than 10");
// } else{
//     console.log("it was awfull");
// }

prompt("")


function checkNumber(number) {
    if (number > 10) {
        return "Greater than 10";
    } else if (number < 10) {
        return "Less than 10";
    } else {
        return "Equal to 10";
    }
}

// Example usage:
console.log(checkNumber(firstno));  // Output: Less than 10
console.log(checkNumber(secondno)); // Output: Equal to 10
console.log(checkNumber(thirdno)); // Output: Greater than 10




