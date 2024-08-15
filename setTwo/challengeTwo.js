/*
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

function numArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    // iterate through all the elements in num array
    for (let j = i + 1; j < nums.length; j++) {
      //compare j with all the elements that come after it.
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(numArray([1, 2, 3, 1]));
console.log(numArray([1, 2, 3, 4]));
console.log(numArray([3, 4, 2, 3, 1]));
