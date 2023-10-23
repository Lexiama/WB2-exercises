"use strict"

var annualRateOfReturn  = 6;

var yearsToDouble = (72/annualRateOfReturn);

var initialInvestment = 1000;

var DoubledInvestment = initialInvestment * 2;


console.log("At a " + annualRateOfReturn + " interest rate, your savings account will be worth " + DoubledInvestment.toFixed(2) + " in " + yearsToDouble + " years");
