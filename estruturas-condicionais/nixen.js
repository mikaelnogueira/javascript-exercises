
// = → atribuição
// == → comparação com coerção
// Ignora o tipo da variável (Podendo converter o tipo da variável)
// === → comparação estrita

//

// if and else utilize
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

// utilize return to finish if structure
// early return
// better code but not bool operator

const number = 101;
if (number % 2 === 0) {
    console.log("Seu número é PAR")
    return
}

console.log("Seu número é IMPAR")


// boolean operator
const number = 123;
const parNumber = (number % 2) === 0; // () define a ordem da operação

console.log(parNumber);