/*
Write a function named twoSum which takes two parameters: nums and target. 
Given an array of integer nums and an integer target, return indices of the two numbers 
such that they add up to the target. You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.
*/

const twoSums = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSums([2, 7, 11, 15], 26));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([2, 3, 6, 1, 4], 4));
