// Challenge one
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

// Challenge two

const promptUser = () => {
    let birthDate = prompt('Please enter the year of birth');
    let calculateYearOfBirth = new Date();
    let yearNow = calculateYearOfBirth.getFullYear()
    const getYears = yearNow - birthDate
    console.log(getYears)
    if (getYears < 18) {
        console.log('Minor')
    }
    else if (getYears > 36 ) {
        console.log('Elder')
    } 
    else {
        console.log('Youth')
    }
}
promptUser()

// Challenge three

function twoSum (nums, target) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
        let foundNumber = target - nums[i]
        if (foundNumber in dict) {
            return [dict[foundNumber], i]
        }
        dict[nums[i]] = i
    }
    // for (i,x in enu)
}
console.log(twoSum([3,2,4], 6))
console.log(twoSum([2,3,6, 1,4], 4))