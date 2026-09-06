// IMC 

function main(){
    const weight = 55;
    const height = 1.73;
    const imcCalculate = (weight / (height * height));
    return imcCalculate
}

if (main() <= 18.5) {
    console.log(main() + ' Underweight');
    return
};

if (main() <= 25) {
    console.log(main() + ' Ideal Weight');
    return
};

if (main() <= 30) {
    console.log(main() +' Overweight');
    return
}

if (main() < 40) {
    console.log(main() + ' Obesity');
    return
}

console.log(main() + ' severe obesity');