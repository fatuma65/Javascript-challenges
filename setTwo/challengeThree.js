/*
Given an array nums of size n, return the majority element. 
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

*/
function appearsTwice(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[j];
      }
    }
  }
}
console.log(appearsTwice([3, 2, 3]));
console.log(appearsTwice([2, 2, 1, 1, 1, 2, 2]));
console.log(appearsTwice([2, 8, 9, 0, 0]));
