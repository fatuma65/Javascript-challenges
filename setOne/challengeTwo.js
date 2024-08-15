/*
Write a JavaScript program that prompts a user to enter their year of birth and 
in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.  
Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest are elders.
*/

const promptUser = () => {
    let birthDate = prompt("Please enter the year of birth");
    let calculateYearOfBirth = new Date();
    let yearNow = calculateYearOfBirth.getFullYear();
    const getYears = yearNow - birthDate;
    if (getYears < 18) {
      console.log("Minor");
    } else if (getYears > 36) {
      console.log("Elder");
    } else {
      console.log("Youth");
    }
  };
  promptUser();
  