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