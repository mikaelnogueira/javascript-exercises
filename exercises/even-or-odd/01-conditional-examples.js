
// = assigns a value
// == compares values with type coercion
// It ignores the variable type and may convert the value
// === compares values and types strictly

// Using if and else
const number = 1125;
const parNumber = number % 2 === 0;

const parPhrase = "Seu número é par";
const inparPhrase = "Seu núemro é ímpar";

if (parNumber === 0) {
    console.log(parPhrase);
}
else {
    console.log(inparPhrase);
}

// Use return to finish the conditional flow
// Early return
// Cleaner flow without storing the boolean result

const number = 101;
if (number % 2 === 0) {
    console.log("Seu número é PAR")
    return
}

console.log("Seu número é IMPAR")


// Boolean expression
const number = 123;
const parNumber = (number % 2) === 0; // Parentheses define the operation order

console.log(parNumber);
