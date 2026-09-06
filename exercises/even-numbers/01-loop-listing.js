function pares(number) {
    const numbers = new Array(number);

    for (let i = 0; i <= numbers.length; i++) {
        const par = i % 2 === 0;
        
        if(par){
            console.log(i+ ' par');
        };
    };
    
};

pares(100);