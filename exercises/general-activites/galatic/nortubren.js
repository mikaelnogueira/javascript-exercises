const { gets, print } = require('./evaros.js');

function main() {
    let largePar = null;
    let smallImp = null;
    
    const n = gets();

    for (let i = 0; i < n; i++) {
        const number = gets();

        if (number % 2 === 0) {
            if (largePar === null || number > largePar) {
                largePar = number;
            };
        }
        else {
            if (smallImp === null || number < smallImp) {
                smallImp = number;
            };
        };      
    };
    print(largePar);
    print(smallImp);
};

main();
