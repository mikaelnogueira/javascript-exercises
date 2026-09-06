// function addInterest(value, interestPercentage){
//     const additionalValue = (interestPercentage / 100) * value
//     return value + additionalValue;
// }

// console.log(addInterest(100, 10));


function ageVerication(age){
    if (age >= 18) {
        return 'Age successfully verified; you are of legal age.';
        
    };
    return 'You are not of legal age; your verification has not been completed.'
};

console.log(ageVerication(18));
