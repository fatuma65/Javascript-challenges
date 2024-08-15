/* Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings. 
The function should return the string Fizz if the combined length of the parameters is divisible by 3, 
the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.*/

const fizzBuzz = (fizz, buzz) => {
  let combined_length = fizz.length + buzz.length;
  if (combined_length % 3 === 0) {
    return "Fizz";
  } else if (combined_length % 5 === 0) {
    return "Buzz";
  } else {
    return "FizzBuzz";
  }
};
console.log(fizzBuzz("hell", "worl"));
