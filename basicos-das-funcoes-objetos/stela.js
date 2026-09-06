// function jurosIncrementar(valor, percentualJuros){
//     const valorAdicional = (percentualJuros / 100) * valor
//     return valor + valorAdicional;
// }

// console.log(jurosIncrementar(100, 10));


function ageVerication(age){
    if (age >= 18) {
        return 'Age successfully verified; you are of legal age.';
        
    };
    return 'You are not of legal age; your verification has not been completed.'
};

console.log(ageVerication(18));