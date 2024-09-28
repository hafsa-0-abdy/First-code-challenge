function calculateNetSalary(basicSalary, benefits) {
    
    // Define constants for deductions
    const personalRelief = 2400;
    const nssfRateTier1 = 0.06;
    const nssfRateTier2 = 0.06;
    
    // This will calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculates PAYE based on gross salary
    let paye;
    if (grossSalary <= 24000) paye = grossSalary * 0.10;
    else if (grossSalary <= 32333) paye = 2400 + (grossSalary - 24000) * 0.25;
    else if (grossSalary <= 500000) paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.30;
    else if (grossSalary <= 800000) paye = 2400 + 2083.25 + 140000.1 + (grossSalary - 500000) * 0.325;
    else paye = 2400 + 2083.25 + 140000.1 + 97500 + (grossSalary - 800000) * 0.35;

    // Subtract personal relief from the PAYE
    paye -= personalRelief;

    //  This section is for NHIF Deduction
    let nhif;
    if (grossSalary <= 5999) nhif = 150;

    else if (grossSalary <= 7999) nhif = 300;

    else if (grossSalary <= 11999) nhif = 400;

    else if (grossSalary <= 14999) nhif = 500;

    else if (grossSalary <= 19999) nhif = 600;

    else if (grossSalary <= 24999) nhif = 750;

    else if (grossSalary <= 29999) nhif = 850;

    else if (grossSalary <= 34999) nhif = 900;

    else if (grossSalary <= 39999) nhif = 950;

    else if (grossSalary <= 44999) nhif = 1000;

    else if (grossSalary <= 49999) nhif = 1100;

    else if (grossSalary <= 59999) nhif = 1200;

    else if (grossSalary <= 69999) nhif = 1300;

    else if (grossSalary <= 79999) nhif = 1400;

    else if (grossSalary <= 89999) nhif = 1500;

    else if (grossSalary <= 99999) nhif = 1600;

    else nhif = 1700;



    //This section is for NSSF contributions
    const nssfTier1 = Math.min(grossSalary, 7000) * nssfRateTier1;
    const nssfTier2 = Math.max(0, grossSalary - 7000) * nssfRateTier2;
    const nssf = nssfTier1 + nssfTier2;



    // This  section calculates the Net Salary
    const netSalary = grossSalary - paye - nhif - nssf;


    // This will reterun the calculated values
    return {
        GrossSalary: grossSalary,
        PAYE: paye,
        NHIF: nhif,
        NSSF: nssf,
        NetSalary: netSalary
    };

}

// Example usage
const salaryDetails = calculateNetSalary(80000, 10000);
console.log(salaryDetails);