// SET ONE

// Challenge one
const fizzBuzz = (fizz, buzz) => {
  let combined_length = fizz.length + buzz.length;
  console.log(combined_length);
  if (combined_length % 3 === 0) {
    return "Fizz";
  } else if (combined_length % 5 === 0) {
    return "Buzz";
  } else {
    return "FizzBuzz";
  }
};
console.log(fizzBuzz("hell", "worl"));

// Challenge two

const promptUser = () => {
  // let birthDate = prompt("Please enter the year of birth");
  let calculateYearOfBirth = new Date();
  let yearNow = calculateYearOfBirth.getFullYear();
  const getYears = yearNow - birthDate;
  console.log(getYears);
  if (getYears < 18) {
    console.log("Minor");
  } else if (getYears > 36) {
    console.log("Elder");
  } else {
    console.log("Youth");
  }
};
promptUser();

// Challenge three

function twoSum(nums, target) {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    let foundNumber = target - nums[i];
    if (foundNumber in dict) {
      return [dict[foundNumber], i];
    }
    dict[nums[i]] = i;
  }
  // for (i,x in enu)
}
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 3, 6, 1, 4], 4));

// Challenge four

function firstPalidrome(words) {
  function isPalindrome(word) {
    let len = word.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (word[i] !== word[len - 1 - i]) {
        return false;
      }
      return true;
    } 
  }
  for (let word in words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "not found";
}


console.log(firstPalidrome(["abc", "car", "ada", "racecar", "coool"]));

// challenge 5

const sumOfDigits = (num) => {
  while (num >= 10) {
    let sum = 0
    while (num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    num = sum
  }
  return num
}
console.log(sumOfDigits(3345))
