// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100

let speedLimit = 55;
let mySpeed = 80;

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
/*
if (mySpeed > speedLimit) {
    // if mySpeed is greater than speedLimit, print the below message
    console.log('Slow Down! Mom is mad');
    } else (mySpeed == speedLimit){
    //if mySpeed is equal to speedLimit print the below message
    console.log('Everyone is happy!');
} else (mySpeed < speedLimit){
    //if mySpeed is less than speedLimit, print the below message
    console.log('Speed up! Dad is mad!');
}
*/
// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = true;
var openDoor = true;

// using a conditional, determine if alarm is set.
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.

if (alarmSet && openDoor) {
  console.log("Sound Alarm!");
} else {
  console.log("Everything is fine!");
}

// create two variables, username and password
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"

var username;
var password;

if (
  (username === "Tommy123" && password === "12345") ||
  (username === "Timmy456" && password === "6789")
) {
  console.log("Admin Login Successful");
} else {
  console.log("Admin Access Denied");
}

// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console

let studentGrade = 13;
let studentClass;

switch (studentGrade) {
  case "K":
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    studentClass = "Elementary";
    break;
  case 7:
  case 8:
    studentClass = "Middle";
    break;
  case 9:
    studentClass = "Freshman";
    break;
  case 10:
    studentClass = "Sophmore";
  case 11:
    studentClass = "Junior";
  case 12:
    studentClass = "Senior";
  default:
    console.log("Error");
    break;
}
// write a for loop that will iterate backwards from 10 to -10

for (let i = 10; i >= -10; i--) {
  console.log(i);
}

// write a do/while loop that prints 1 through 50
/*
// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4

do {
  console.log(iterator % 4);
  iterator++;
} while (iterator <= 50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 1; i < 100; i++){
        console.log(i);
    } 
*/

var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;

if (num1 >= num2) {
  console.log("The first statement is true, but the second is not.");
  if (num3 >= num4) {
    console.log("Both statements are true.");
  } else {
    console.log("Program ended.");
  }
}
