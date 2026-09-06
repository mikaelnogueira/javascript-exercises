// Define points

const portuguese = {
    subject: 'portuguese ', 
    point: 2.5
}; 

const math = {
    subject: 'math ', 
    point: 2.5
}; 

const history = {
    subject: 'history ', 
    point: 2.5
}; 

console.log('Students Points per Subjects:', portuguese, math, history)

// GPA

const gpa = (portuguese.point + math.point + history.point) /3;

console.log('Student GPA is '+ gpa.toFixed(2));

//Classification

if (gpa < 2.5) {
    console.log('reprove');
    return
}

if (gpa >= 2.50 && gpa <= 3.50) {
    console.log('repeat test');
    return
}

console.log('aprove');