/*
Write a function to find the longest common prefix string amongst an array of strings. 
If there is no common prefix, return an empty string "".
*/
const commonPrefix = (str) => {
  let firstElementOfArray = str[0];
  let prefix = "";
  for (let i = 0; i < firstElementOfArray.length; i++) {
    // iterate through the first element of the str array.

    let currentCharacter = firstElementOfArray[i]; // the first character of the first element of the array.

    for (let j = 1; j < str.length; j++) {
      if (i >= str[j].length || str[j][i] !== currentCharacter) {
        return prefix;
      }
    }
    prefix += currentCharacter;
  }
  return prefix;
};
console.log(commonPrefix(["flower", "flow", "flight"]));
console.log(commonPrefix(["dog", "racecar", "car"]));
