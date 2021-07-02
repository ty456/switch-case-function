//Multiple Identical Options in Switch Statements 
//sol 1
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        break;
      case 4:
      case 5:
      case 6:
        return "Mid";
        break;
      case 7:
      case 8:
      case 9:
        return "High";
        break;
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
   console.log(sequentialSizes(1));

   //sol 2
   function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
   console.log(sequentialSizes(1));

   //Code Explanation
/*Since you already have a variable named answer defined and the function returns it,
 you can just modify its value on each group of case statements to fit the exercise requirements.*/


 /*A switch statement is like an if-else statement that can have many different possible outcomes.
 Each 'case' in the switch statement is an instruction on what to do if the
 input parameter is of a certain value.
 Eg 'case 1:' would be the start of the line or block that has
 the return value if the parameter was 1.
 Multiple different cases can give the same output,
 so in the above example, case 1, 2, and 3 all output the string "Low".
 the keyword break is used after the return statement,
 to instruct the program to break out of the switch statement
 as the operation has been performed.
In this particular example the value isn't being returned after each case,
 but rather the variable answer is being set,
 which contains the return value returned at the bottom of the function.




So, if you input 1, 2, or 3 into the function,
 it will output "Low", if you put 4, 5 or 6, it will output "Mid", 
and if you put 7, 8 or 9 it will output "High"*/