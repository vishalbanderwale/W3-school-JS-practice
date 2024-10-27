//for fixed set of values use switch
//for expresions use if-else-if else

/* switch (expression) {
  case x:
    //code to be exceuted
    break;
  case y:
    //code to be exceuted
    break;
  default:
  //code to be exceuted
} x and y is value */

/* The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
if break is not present the next stat is exceuted if it doesnot match  */

//Write a switch statement that logs the name of the day based on a variable dayNumber
// (1 for Sunday, 2 for Monday, etc.).

let dayNumber = 4;

switch (dayNumber) {
  case 1: //exp value 4 is compared with 1
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  default:
    console.log("invalid input");
    break;
}

//Create a switch statement that takes a variable grade and prints:

/* "Excellent" for 'A'
"Good" for 'B'
"Pass" for 'C'
"Fail" for 'D'
"Invalid grade" for any other input. */

let grade = "A";

switch (grade) {
  case "A":
    console.log("excellent");
    break;
  case "B":
    console.log("good");
    break;
  case "C":
    console.log("pass");
    break;
  case "D":
    console.log("fail");
    break;
  default:
    console.log("invalid");
    break;
}

/* Create a switch statement that assigns a discount based on a membershipLevel:

'Gold' gets 20% off,
'Silver' gets 15% off,
'Bronze' gets 10% off,
No discount for any other membership. */

let membership = "gold";

switch (membership) {
  case "gold":
    console.log("20% off");
    break;
  case "silver":
    console.log("15% off");
    break;
  case "bronze":
    console.log("10% off");
    break;
  default:
    console.log("no discount");
    break;
}

/* Write a switch statement that categorizes a month variable into seasons:

Winter: December, January, February
Spring: March, April, May
Summer: June, July, August
Fall: September, October, November */

let month = "April";
switch (month) {
  case "January":
  case "December":
  case "February":
    console.log("winter season");
    break;
  case "March":
  case "April":
  case "May":
    console.log("spring season");
    break;
  default:
    console.log("Fall");
}
