function main(){
    for (let i = 0; i < gpa.length; i++) {
        const gpaList = gpa[i];
        sum = sum + gpaList; // sum += gpaList;
    }
    const media = sum / gpa.length;
    console.log((media).toFixed(2));
};

const gpa = [];
gpa.push(5); gpa.push(6);
gpa.push(7); gpa.push(5);

let sum = 0;

main();
