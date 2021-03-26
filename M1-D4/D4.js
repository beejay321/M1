/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (side1, side2) {
  let value = side1 * side2;
  return value;
};
console.log(area(11, 12));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
};
console.log(crazySum(27, 27));
console.log(crazySum(35, 75));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (givNum) {
  if (givNum > 19) {
    return 3 * Math.abs(givNum - 19);
  }
  console.log(crazyDiff(27));
  console.log(crazyDiff(10));

  /* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

  /* WRITE YOUR CODE HERE */

  const boundary = function (n) {    
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    }    
  };
  console.log(boundary(55));

  /* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

  /* WRITE YOUR CODE HERE */

  const strivify = function (aString) {
    if (aString.slice(0, 6) == "Strive") {
      return aString;
    } else {
      return "Strive" + aString;
    }
  };
  console.log(strivify("Strivehard"));
  console.log(strivify("hard"));

  /* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

  /* WRITE YOUR CODE HERE */

  const check3and7 = function (aPositiveNum) {
    let result;
    if (aPositiveNum % 3 === 0 || aPositiveNum % 7 === 0) {
      console.log(true);
    }
    return result;
  };
  console.log(check3and7(21));

  /* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

  /* WRITE YOUR CODE HERE */

  let myName = "busola";
  const reverseString = function (myName) {
    return myName.split("").reverse().join("");
  };
  console.log(reverseString(myName));

  /* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

  /* WRITE YOUR CODE HERE */

  const upperFirst = function (capitalize) {
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
  };
  console.log(upperFirst("underestimated"));

  /* EXERCISE 9
  Write a function "cutString" to create a new string without the first and last character of a given string.
  */

  /* WRITE YOUR CODE HERE */

  const cutString = function (myNewString) {
    return myNewString.slice(1, -1);
  };
  console.log(cutString("EXCELLENT"));

  /* EXERCISE 10
  Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
  */

  /* WRITE YOUR CODE HERE */
  const giveMeRandom = function (aNum) {
    const arr = [];
    for (let i = 0; i <= aNum; i++) {
      const oneRanNum = Math.floor(Math.random() * 10);
      arr.push(oneRanNum);
    }
    return arr;
  };
  console.log(giveMeRandom(5));

  /* WHEN YOU ARE FINISHED
  Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
};
