"use strict"

"use strict";

let taxRate;
let income = 1000;
let filingStatus = "joint";

if (income < 12000) 
{
    
    taxRate = 0.05;
}
else if (income >= 12000)
{
    taxRate = 0.10;
}
else if (income >= 25000)
{
    taxRate = 0.15;
}
else (income > 75000) 
{
    taxRate = 0.20;
}

let incomeTaxPaid = income * taxRate;

console.log(taxRate);
console.log(incomeTaxPaid);


