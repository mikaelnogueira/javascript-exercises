function gets(gpa) {
    let sum = 0;

    for (let i = 0; i < gpa.length; i++) {
        const gpaList = gpa[i];
        sum = sum + gpaList; // sum += gpaList;
    }
    const media = sum / gpa.length;
    console.log((media).toFixed(2));
    return media;
};

function print(text) {
    console.log(text);
}

// module.exports.gets = gets;

module.exports = {
    gets: gets,
    print: print
};