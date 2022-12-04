/*
Understanding boolean values

 == equality
> Greater than
< Less Than
&& And
|| OR
>= Greater than and equal to
<= Less than and equal to
*/

/*
5 == 5 would be true
5 > 4 would be true
5 < 2 would be false
&& 
|| OR
5 >= 6 would be true 
7 <= 9 would be false 
*/
/*

5 > 4 && 4 < 10  would be true

4 > 10 || 1 == 1  this would be true, as it only needs to have one to be true

*/

/*var FirstName = "Sam";

if (FirstName == "Daniel") {
  console.log("Hello", FirstName, "you're doing great so far!");
} else {
  console.log("Hey, " + FirstName);
} */

var costOfMilk = 3;

if (costOfMilk < 2) {
  console.log("We will buy 2 gallons");
} else if (costOfMilk < 3) console.log("We will buy only 1 gallon");
else {
  console.log(" No thanks, it's way too expensive");
}

var grade = "A";

switch (grade) {
  case "A":
    console.log("90-100");
    break;
  case "B":
    console.log("80 - 89");
    break;
  case "C":
    console.log("70 - 79");
    break;
  default:
    console.log("0-69");
}
//this is not the best way to write the code below, you can do it much cleaner
var a = 5;
var b = 6;

if (a == 5) {
  if (b == 6) {
    console.log("A is 5 and b is 6.");
  } else {
    console.log("a is 5 but b is not 6.");
  }
}

//this is the cleaner way to write it, but neither are wrong ways..
if (a == 5 && b == 6) console.log("a is 5 and b is 6.");
