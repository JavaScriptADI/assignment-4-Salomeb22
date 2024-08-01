// Write a for loop to print the numbers 1 through 10.
for (let n = 1; n < 11; n++) {
    console.log(n);
}

// Write a for loop that prints the numbers 10 through 1.
for (let n = 10; n > 0; n--) {
    console.log(n);
}

// Explain the code below. Write a comments to each line.
let sum = 0; // the sum function adds values.
for (let i = 1; i <= 50; i++) { // this is for loop and it's says that iteration will start from 1 and end with 50. it's a steps.
    sum += i; // it shows where the iteration should end the sum calculation
}
console.log(sum); // it shows the final result

// How many iterations are in the loop below? Explain.
for (let i = 0; i < 10; i += 2) {
    console.log(i);
} // there is 5 iteration

// What does the break statement do? Explain and give an example.
// answer - the break statement is to stop the loop when we get what result we wanted.
// example:
for(let n = 0; n < 10; n++) {
    console.log(n);
    if(n === 5)
        break;
}

// What does the continue statement do? Explain and give an example.
// continue statement is to skip the iteration
// example:
for(let n = 0; n < 10; n++) {
    if(n === 3)
        continue;
    console.log(n);
}

// Generate and print a random number between 1 adn 100 until you get the number 27;
let n = -Infinity;
let randomNum;
let is27found = false;
for(let i = 0; i < 100; i++) {
    randomNum = parseInt(Math.random() * 101);
    if(randomNum === 27) {
        is27found = true;
    }
    if(is27found) {
        console.log('found the number!');
        break;
    }
}

// Generate Random Password. HINT - Use ASCII codes to generate random characters.
