// Challenge


// Gasoline and ethanol prices
const etanolPrice = 2.08;
const gasPrice = 1.54;

console.log('Etanol Price is $' + etanolPrice, 'Gas Price is $' + gasPrice);

// Travel distance
const travelDistance = 100;
const travel = 'Travel distance is ' + travelDistance + ' Kilometers'; 

console.log(travel);

// Fuel consumed by the car
const litersConsumed = travelDistance / 4;

console.log('Car consume liter in this travel is ' + litersConsumed + 'Liters')

// Select gasoline or ethanol

const carType = 'gas';

if (!carType === 'gas') {
    console.log('Cost with etanol in this travel is $' + (etanolPrice * litersConsumed).toFixed(2));
    return
}

console.log('Cost with gas in this travel is $' + (gasPrice * litersConsumed).toFixed(2));
