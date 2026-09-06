

function gets() {
    return 10
};

function print(text) {
    console.log(text);
}


// module.exports.gets = gets;

module.exports = {
    gets: gets,
    print: print
};