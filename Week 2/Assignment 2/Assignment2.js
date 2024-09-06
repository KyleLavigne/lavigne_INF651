
// 1. Variable Data Types
// Declare the variables
let personName = "John Doe";  // String
let age = 25;  // Number
let isStudent = true;  // Boolean

// Log each variable's value and type
console.log("Name:", personName, "Type:", typeof personName);
console.log("Age:", age, "Type:", typeof age);
console.log("Is Student:", isStudent, "Type:", typeof isStudent);


// 2. Basic Arithmetic Operation
// Declare two number variables
let num1 = 10;
let num2 = 5;

// Perform basic arithmetic operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

// Log the result of each operation
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);


// 3. Working With Strings
// Declare a string variable
let sentence = "Hello, welcome to JavaScript!";

// Log the length, first character, and last character of the string
console.log("Length of the string:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));


// 4. Math Object
// Declare a variable with a negative number
let negativeNum = -9;

// Use the Math object for calculations
let squareRoot = Math.sqrt(negativeNum);
let squared = Math.pow(negativeNum, 2);
let absoluteValue = Math.abs(negativeNum);

// Log the calculations
console.log("Square root:", squareRoot);
console.log("Squared value:", squared);
console.log("Absolute value:", absoluteValue);


// 5. Boolean Logic and Comparison Operators
// Declare two number variables
let numA = 7;
let numB = 10;

// Use comparison operators
console.log("Is numA greater than numB?", numA > numB);
console.log("Is numA less than numB?", numA < numB);
console.log("Is numA equal to numB?", numA === numB);


// 6. Logical Operators
// Declare two boolean variables
let isOnline = true;
let hasPermission = false;

// Log results of logical operators
console.log("AND operation (isOnline && hasPermission):", isOnline && hasPermission);
console.log("OR operation (isOnline || hasPermission):", isOnline || hasPermission);
console.log("NOT operation (!isOnline):", !isOnline);


// 7. Using Template Literals
// Declare variables for first and last name
let firstName = "Jane";
let lastName = "Doe";

// Create and log a greeting message using template literals
let greetingMessage = `Hello, ${firstName} ${lastName}! Welcome to the course.`;
console.log(greetingMessage);

