/* if(condition){
code to be  exceuted if condition is true
} else{
 code to be exceuted if condition is false
 } */

/* if(condition-1){
code to be  exceuted if condition is true
}  else if(condition-2){
 code to be exceuted if condition is true
 } else{
  code to be excecuted 
}*/

//Determine the largest number:
//Write a program that takes three numbers as input and prints the largest one using if-else if-else.

let num1 = 5;
let num2 = 10;
let num3 = 7;

/* num1 > num2 > num3;
5 > 10 > 7; */

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is largest number`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is largest`);
} else {
  console.log(`${num3} is largest`);
}

//Write a program that takes a student's score and prints their grade based on the following conditions:

/* Score >= 90: Grade A
Score >= 80: Grade B
Score >= 70: Grade C
Score >= 60: Grade D
Else: Fail */

let score = 85;

if (score >= 90) {
  console.log("grade-A");
} else if (score >= 80) {
  console.log("grade-B");
} else if (score >= 70) {
  console.log("grade-c");
} else if (score >= 60) {
  console.log("grade-D");
} else {
  console.log("fail");
}

//Positive, Negative, or Zero:
//Write a program that checks if a number is positive, negative, or zero.

let num = 0;

if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
