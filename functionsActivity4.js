//1. Create a function that takes in a number of minutes. Convert the minutes to seconds and console log the result.
console.log("Question1:")
function minutesToSeconds(minutes) {
    const seconds = minutes * 60;
    console.log(seconds);
  }
  minutesToSeconds(10); 
 

//2 Create a function that takes an array and return the first element.
console.log("Question2:")
const fruits = ["apple", "orange", "pear", "banana"]
function firstFruit(fruits) {
  return fruits[0];
}
console.log(firstFruit(fruits));






//3. Create a function that takes a number as its parameter and returns true if it's less than or equal to zero, otherwise return false.
console.log("Question3:")
function lessThanOrEqualToo(number) {
    if (number <= 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(lessThanOrEqualToo(6))
  console.log(lessThanOrEqualToo(-5))

//4. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value. The first parameter of your function should be 2-pointers and the second parameter should be 3-pointers. 
console.log("Question4:")
function totalPoints(two, three) {
     return two * 2 + three * 3
}

console.log(totalPoints(7,5))




//5. Create a function that tells you if an array is empty or not. It should take an array as a parameter. If the array is empty return true otherwise return false.
console.log("Question5:")

function empty(array) {
    return array.length === 0;
}

let array = [];

console.log(empty(array));

let array2 = [1, 2, 3];

console.log(empty(array2));