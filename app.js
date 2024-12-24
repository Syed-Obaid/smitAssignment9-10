// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// let inp = prompt("Enter Your city Name")
 
// let ans = inp.toLowerCase()

// if(ans === "karachi"){
//  document.write(`Welcome To City of lights! ${ans}`)
// }else{
//     document.write(`Welcome in ${ans}`)
// }

// -------------------------------------------------------------------------------------------

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let inp2 = prompt("Enter Your Gender","male")

// let ans1 = inp2.toLowerCase()

// if(ans1 === "male"){
//  document.write(`Good Morning Sir!`)
// }else{
//     document.write(`Good Morning Ma'am`)
// }

// ------------------------------------------------------------------------------------------------

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// let inp3 = prompt("Enter Your Favorite Traffic signal color")
// let ans2 = inp3.toLowerCase()

// if(ans2 === "green"){
//  document.write("Move now")
// }else if (ans2 === "yellow"){
//     document.write("Ready to move")
// }else if (ans2 === "red"){
//     document.write("Must Stop")
// }else{
//     document.write("invalid input")
// }


// let inp4 = prompt("Enter Remaining Fuel In Car 'in litres'")

// if (inp4 < 1 ){
//     document.write("“Please Refill the Fuel In Your Car”")
// }else{
//     document.write("No Need To Refill")
// }

// --------------------------------------------------------------------------------------------

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.



//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// -----------------------------------------------------------------------------------------------


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let totalMarks = +prompt("Enter Total Marks")
// let marksObtained = +prompt("Enter Marks Obtained")
// let percentage = (marksObtained / totalMarks) *100;
// document.write(`<h1>Marks Sheet</h1>`)
// document.write(`<br/>`)
// document.write(`Total Marks : ${totalMarks}`)
// document.write(`<br/>`)
// document.write(`Percentage : ${percentage.toFixed(2) }%`)
// document.write(`<br/>`)
// if(percentage>= 80){
//     document.write(`Grade : A-one`)
//     document.write(`<br/>`)
//     document.write(`Remarks : Excellent`)
// }else if(percentage>= 70){
//     document.write(`Grade : A`)
//     document.write(`<br/>`)
//     document.write(`Remarks : Good`)
// }else if(percentage>= 60){
//     document.write(`Grade : B`)
//     document.write(`<br/>`)
//     document.write(`Remarks : You Need To Improve`)
// }else{
//     document.write("Fail")
//     document.write(`<br/>`)
//     document.write(`Remarks : Sorry`)
// }


// -----------------------------------------------------------------------------------------

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let secretNum = 7;
// let userGuess = +prompt("Guess The Number between 1 to 10")
// if(userGuess === secretNum){
//   document.write("“Bingo! Correct Answer”.")
// }else if(userGuess === secretNum +1 ||  userGuess === secretNum -1){
// document.write("“Close enough to the correct answer”")
// }else{
//     document.write("Try Again!!")
// }



// --------------------------------------------------------------------------------------------------

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let check = +prompt("Enter Number To Check Whether Number is Divisible by 3?")
// if(check % 3 === 0){
//   document.write(`'${check}' Is Divisible by 3`)
// }else{
//     document.write(`'${check}' Is Not Divisible by 3`)
// }


// ---------------------------------------------------------------------------------------------------

// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// let check1 = +prompt("Enter The Number To Check it's Even or Odd?")
// if(check1 % 2 === 0){
//     document.write(`'${check1}' Is Even Number!`)
// }else{
//     document.write(`'${check1}' Is Odd Number!`)
// }


// -------------------------------------------------------------------------------------------------


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// let userTemp = +prompt('Enter The Temperature')

// if(userTemp > 40){
//     document.write("“It is too hot outside.”")
// }else if(userTemp > 30){
//     document.write("“The Weather today is Normal.”")
// }else if(userTemp > 20){
//     document.write("“Today’s Weather is cool.”")
// }else if(userTemp > 0){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }


// ---------------------------------------------------------------------------------------------

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// let firstNum = +prompt("Enter First Number")
// let secondNum = +prompt("Enter Second Number")
// let operators = prompt("+ , - , * , / , %")

// if(operators === "+"){
//     document.write(`Result : ${firstNum + secondNum}`)
// }else if(operators === "-"){
//     document.write(`Result : ${firstNum - secondNum}`)
// }else if(operators === "*"){
//     document.write(`Result : ${firstNum * secondNum}`)
// }else if(operators === "/"){
//     if(secondNum !== 0){
//         document.write(`Result : ${firstNum / secondNum}`)
//     }else{
//         document.write(`"Error: Division by zero is not allowed."`)
//     }
// }
// else if(operators === "%"){
//     if(secondNum !== 0){
//         document.write(`Result : ${firstNum % secondNum}`)
//     }else{
//         document.write(`"Error: Modulus by zero is not allowed."`)
//     }
// }
// else{
//     document.write("Please Select Valid Operators")
// }


