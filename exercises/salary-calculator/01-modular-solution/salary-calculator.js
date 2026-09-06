function gets(name, salaryBrute, benefits) {

    class Employer {
        name;
        salaryBrute;
        tax;
        benefits;

        constructor(name, salaryBrute, tax, benefits) {
            this.name = name;
            this.salaryBrute = salaryBrute;
            this.tax = tax;
            this.benefits = benefits;
        }

        describeEmployer() {
            console.log(`The ${this.name} gross salary is $${this.salaryBrute}`);
            console.log(`The tax applies is $${this.tax}`);
        }

        calcTotal(salaryBrute, benefits) {
            if (salaryBrute <= 1100) {
                this.tax = salaryBrute * 0.05;
                return (salaryBrute - this.tax) + benefits;
            }

            if (salaryBrute <= 2500) {
                this.tax = salaryBrute * 0.1;
                return (salaryBrute - this.tax) + benefits;
            }

            if (salaryBrute > 2500) {
                this.tax = salaryBrute * 0.15;
                return (salaryBrute - this.tax) + benefits;
            }
        }
    }

    const employer = new Employer(name, salaryBrute, null, benefits);
    const salaryTotal = employer.calcTotal(salaryBrute, benefits);

    employer.describeEmployer();
    return 'Your Salary Final is $' + salaryTotal;
}

function print(name, salaryBrute, benefits) {
    console.log(gets(name, salaryBrute, benefits));
}

module.exports = {
    gets,
    print
}