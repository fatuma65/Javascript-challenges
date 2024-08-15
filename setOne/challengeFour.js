/*
Write a function named firstPalindrome which takes a parameter: words. 
Given an array of string words, return the first palindromic string in the array. 
If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

function isPalindrome(word) {
  let lenOfWord = word.length;
  for (let i = 0; i < Math.floor(lenOfWord / 2); i++) {
    if (word[i] !== word[lenOfWord - 1]) {
      return false;
    }
  }
  return true;
}
function firstPalidrome(words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
}

console.log(firstPalidrome(["abc", "car", "ada", "racecar", "coool"]));
