//1. Guessing Game (While Loop)
// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guess < randomNumber) {
        alert("Too low, try again.");
    } else if (guess > randomNumber) {
        alert("Too high, try again.");
    } else {
        alert("Congratulations! You guessed the correct number.");
    }
}


//2. Password Validator (Do-While Loop)
let password = prompt("Set your password:");
let confirmPassword;

do {
    confirmPassword = prompt("Re-enter your password for confirmation:");
    if (password !== confirmPassword) {
        alert("Passwords do not match. Try again.");
    }
} while (password !== confirmPassword);

alert("Password confirmed successfully.");


//3. Multiplication Table Generator (For Loop)
// Prompt the user to input a number
let number = parseInt(prompt("Enter a number to generate its multiplication table:"));

// For loop to iterate through numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


//4. Grade Evaluator (If-Else Statements)
let score = parseInt(prompt("Enter your score (0-100):"));
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score < 60 && score >= 0) {
    grade = "F";
} else {
    grade = "Invalid score";
}

alert("Your grade is: " + grade);


//5. Day Finder (Switch Case)
let dayNumber = parseInt(prompt("Enter a number between 1 and 7:"));
let day;

switch (dayNumber) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Invalid input";
}

alert("The day is: " + day);
