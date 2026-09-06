class Car {
    brand;
    color;
    average;

    constructor(brand, color, average) {
        this.brand = brand;
        this.color = color;
        this.average = average;
    }

    describe() {
        return `Brand is ${this.brand} and Color is ${this.color}`
        return `Brand is ${this.brand} and Color is ${this.color}`;
    }

    averageCalc(kmTravel, gas) {
        const cost = ((kmTravel / this.average) * gas).toFixed(2);

        return `Your ${this.brand} cost is R$ ${cost} in this travel`;
    }
}

const carOne = new Car('Mercedes', 'Black', 4);
const gas = 2.34;

console.log(carOne.describe());
console.log(carOne.averageCalc(135, gas));
