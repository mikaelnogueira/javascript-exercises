// IMC 

const weight = 60;
const height = 1.73;

const imcCalculate = weight / (height * height);

if (imcCalculate <= 18.5) {
    console.log(imcCalculate.toFixed(2) + ' Underweight');
    return
};

if (imcCalculate > 18.5 && imcCalculate <= 25) {
    console.log(imcCalculate.toFixed(2) + ' Ideal Weight');
    return
};

if (imcCalculate > 25 && imcCalculate <= 30) {
    console.log(imcCalculate.toFixed(2) +' Overweight');
    return
}

if (imcCalculate > 30 && imcCalculate < 40) {
    console.log(imcCalculate.toFixed(2) + ' obesity');
    return
}

console.log(imcCalculate.toFixed(2) + ' severe obesity');

