const fizzBuzz = (fizz, buzz) => {
  let combined_length = fizz.length + buzz.length;
  console.log(combined_length)
  if (combined_length % 3 === 0) {
    return "Fizz";
  } else if (combined_length % 5 === 0) {
    return "Buzz";
  } else {
    return "FizzBuzz";
  }
};
console.log(fizzBuzz("hell", "worl"));


console.log(9 % 3)