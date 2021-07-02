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