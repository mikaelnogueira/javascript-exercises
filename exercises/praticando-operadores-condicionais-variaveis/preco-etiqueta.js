// vars
const product = {
    name: 'Jacket',
    price: 200
};

const debit = (10 / 100) * product.price;
const paperPix = (15 / 100) * product.price;
const twoTimes = product.price / 2;
const moreTime = (10 / 100) * product.price;
const optionBuy = 'debit';

// logic
console.log(product.name + ' is $' + product.price);

if (optionBuy === 'debit') {
    product.price = product.price - debit;
    console.log('Payment form is debit')
    console.log(product.name + ' with 10% discount is $' + product.price.toFixed(2));
    return
};

if (optionBuy === 'paperPix') {
    console.log('Payment form is Paper Money or Pix')
    product.price = product.price - paperPix;
    console.log(product.name + ' with 15% discount is $' + product.price.toFixed(2));
    return
};

if (optionBuy === 'twoTimes') {
    console.log('Payment form in 2 times')
    console.log('Normal price is $' + product.price + ' In Two times is $' + twoTimes);
    return
}

product.price = product.price + moreTime
console.log('For longer payment terms, it is 10% plus interest $' + product.price);
