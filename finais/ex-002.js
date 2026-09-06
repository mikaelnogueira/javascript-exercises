function gets(salaryBrute, benefits) {
    class Employer {
        name;
        salaryBrute;
        tax;
        benefits;

        constructor(salaryBrute, tax, benefits) {
            this.salaryBrute = salaryBrute;
            this.tax = tax;
            this.benefits = benefits;
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
    
    const employer = new Employer(salaryBrute, null, benefits);
    const salaryTotal = employer.calcTotal(salaryBrute, benefits);
    
    return salaryTotal;
}

console.log(gets(2000, 250));