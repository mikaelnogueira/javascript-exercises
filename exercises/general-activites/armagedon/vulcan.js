const { gets, print } = require('./mefisto.js');

const gpa = [];
gpa.push(5); gpa.push(5);
gpa.push(5); gpa.push(5);

function main(){
    const media = gets(gpa);

    if (media < 5) {
        print('reprove');
        return
    };

    if (media < 7) {
        print('re-test');
        return
    };

    print('aproved');
};

main(gets(gpa));
