//1. Take two numbers from the user and display their sum.

var a = parseInt(prompt("Enter your's first number."));
var b = parseInt(prompt("Enter your second number."));

var sum = a + b; 
document.write("The sum of your numbers is : " + sum );

// 2. Write a program to add three numbers entered by the user.


var x = parseInt(prompt("Enter your's first number?"));
var y = parseInt(prompt("Enter your second number?"));
var z = parseInt(prompt("Enter your third number?"));

var sum = x + y + z ; 
document.write("Addition of yours numbers is : " +sum);

//3. Ask the user for two numbers, add them, and show the result using alert().

var num1 = parseInt(prompt("what is your 1st number?"));
var num2 = parseInt(prompt("what is your 2nd number?"));

var add = num1 + num2

alert("The sum of your numbers is : " + add );

//4.Take two numbers and display their sum, difference, product, and quotient.

var number1 = 250;
var number2 = 5;

var sum = number1 + number2; 
document.write("Sum : " + sum + "</br>" );

var diff = number1 - number2 ;
document.write("Difference : " + diff  + "</br>");

var product = number1 * number2;
document.write("Product : " + product  + "</br>");

var quotient = number1 / number2;
document.write("Quotient : " + quotient + "</br>");

//5.Take the user’s name and two numbers, then greet the user with the message and result of addition.
//    Example: "Hello Afsah, the sum of 5 and 8 is 13"

var name = "Ambreen";
var num3 = 25;
var num4 = 35;

var result = num3 + num4;

document.write(`Hello ${name}, The sum of ${num3} and ${num4} is : ${result}`);



// 6. Take two numbers as input, convert them to integers, then add them and show the result in the console.

var a = prompt("Input your first number");
var b = prompt("Input your second number");

var add =parseInt(a) + parseInt(b) ;
console.log("The result is : " + add);


// 7. Take two numbers as input using prompt(), check if both are numbers, then add them. If not, show an error message.

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

if (!isNaN(num1) && !isNaN(num2)) {
  var sum = parseFloat(num1) + parseFloat(num2);
  console.log("The sum is: " + sum);
} else {
  console.log("Error: Please enter valid numbers.");
}
 

// 8. Create a program where the user inputs a number and the program adds 10 to it and displays the result.



// 9. Take two numbers and display whether their sum is even or odd.
// 10. Create a simple calculator using prompt() that takes two numbers and an operator (+, -, , /), and performs the correct operation.
var answer =  prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform an action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator.");
}

