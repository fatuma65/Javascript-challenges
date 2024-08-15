/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
*/
const singleElement = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let count = 0; //to count how many times an element has appeared in the nums array.

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i]; // return the single element at index i
    }
  }
};
console.log(singleElement([2, 2, 1]));
console.log(singleElement([4, 1, 2, 1, 2]));
console.log(singleElement([3, 5, 8, 0, 3, 8]));
