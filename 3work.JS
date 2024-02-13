1.
let city =  prompt("Enter City Name");
if ( city === "Karachi" ){
    alert("Welcome to the city of light");
}
2.
let gender = prompt("Please Your Gender");
if (gender === "Male") {
    alert("Good Morning Sir");
} else if (gender === "Female"){
    alert("Good Morning Ma'am");
}
3.
let fuel = prompt("Please check Fuel in your Car");
if (fuel < "0.25 liter"){
    message = "Please refill the fuel in your car";
    alert(message);
}
4.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}
5.
var secretNumber = 4;
var guessed = +prompt("Guess the secret number (ranging from 1 to 10):");
if (guessed === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guessed + 1 === secretNumber || guessed - 1 === secretNumber) {
  alert("Close enough to the correct answer.");
}
6.
var number = +prompt("Enter a number:");
if (number % 3 === 0) {
  alert("The number is divisible by 3.");
}
7.
var inputNumber = +prompt("Enter a number:");
if (inputNumber % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}
8.
var temperature = +prompt("Enter the temperature:");
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
}
9.
var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
}
alert("The result is: " + result);