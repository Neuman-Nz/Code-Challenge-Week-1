let nhifDeduction

let nssfDeduction

let payeDeduction

function calculateNhif(salary) {
    const salaryRanges = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    for (const range of salaryRanges) {
        if (salary >= range.min && salary <= range.max) {
            nhifDeduction = range.deduction;
            return nhifDeduction;
        }
    }

    return 0;
}

function calculateNssf(salary){
    if(salary > 0 && salary <= 18000){
        nssfDeduction = salary * 0.06;
        return nssfDeduction;
    }
    else{
        nssfDeduction = 1080;
        return nssfDeduction;
    }
   
}

function calculatePaye(salary){
    const salaryRanges = [
        { min: 0, max: 24000, deduction: 0.10 },
        { min: 24001, max: 32333, deduction: 0.25 },
        { min: 32334, max: 500000, deduction: 0.30 },
        { min: 500001, max: 800000, deduction: 0.32 },
        { min: 800000, max: Infinity, deduction: 0.35}
    ];

    for (const range of salaryRanges) {
        if (salary >= range.min && salary <= range.max) {
            payeDeduction = range.deduction * salary;
            return payeDeduction;
        }
    }

    return 0;

}

function getNetSalary(){

    const inputSalary = prompt("Enter the Salary:");

    const numericSalary = parseFloat(inputSalary);

    if (!isNaN(numericSalary)) {
        const calculateNhifDeduction = calculateNhif(numericSalary);
        const calculateNssfDeduction = calculateNssf(numericSalary);
        const calculatePayeDeduction = calculatePaye(numericSalary);

        const result = numericSalary - (calculateNhifDeduction + calculateNssfDeduction + calculatePayeDeduction);
        document.getElementById("netSalary").innerHTML = result;
    } else {
        document.getElementById("netSalary").innerHTML = "Invalid Salary. Salary should be a number.";
    }

}