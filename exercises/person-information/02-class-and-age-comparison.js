// comparate age person

class Person {
    name;
    age;
    born;

    constructor(name, age, born){
        this.name = name;
        this.age = age;
        this.born = 2026 - age;
    };

    describe() {
        console.log(`Person name is ${this.name} and your age is ${this.age} and you born in ${this.born}`);    
    };

    compare(onePerson, secPerson) {
        if (onePerson.born <= secPerson.born){
            return `The ` + onePerson.name + ` is ` + (onePerson.age - secPerson.age) + ` years older than ` + secPerson.name;
        };
        return `The ` + secPerson.name + ` is ` + (secPerson.age - onePerson.age) + ` years older than ` + onePerson.name;
    };
};

const matias = new Person('Matias', 20);
const nerala = new Person('Nerala', 24);

matias.describe();
nerala.describe();

console.log(matias.compare(matias, nerala));