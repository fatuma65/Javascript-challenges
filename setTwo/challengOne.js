/*
Given an Array containing integers, floats, and one character strings, 
write a function that takes an Array as a parameter and returns an Object with keys evens, odds, and chars. 
The value for evens is an array of sorted even numbers, the value for odds is a list of sorted odd numbers and 
chars is a list of sorted single-character strings.
Caution: DO NOT use the sort array method
*/

const arrayFunction = (numArray) => {
  let sortedObj = {
    evens: [],
    odds: [],
    chars: [],
  };

  for (let element of numArray) {
    if (typeof element === "number") {
      if (element % 2 === 0) {
        sortedObj.evens.push(element);
      } else {
        sortedObj.odds.push(element);
      }
    } else if (typeof element === "string") {
      sortedObj.chars.push(element);
    }
  }

  function sortElements(numArray) {
    let n = numArray.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // j = index of the current element, j++ = index of the next element being compared.
        if (numArray[j] > numArray[j + 1]) {
          let current = numArray[j];
          numArray[j] = numArray[j + 1];
          numArray[j + 1] = current;
        }
      }
    }
    return numArray;
  }
  sortedObj.evens = sortElements(sortedObj.evens);
  sortedObj.odds = sortElements(sortedObj.odds);
  sortedObj.chars = sortElements(sortedObj.chars);

  return sortedObj;
};

let someArray = [3.0, "a", 7, "x", "20", "d", 4, "f", 8, 9, 6.0, 45, 8];
console.log(arrayFunction(someArray));
