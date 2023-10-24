"use strict"
//Hours worked

// If hours are over 40: overhours
// If hours are under 40: underhours
// otherwise: exactly 40 hours

//if hours are underhours

let payRate = 12.50;
let hoursWorked = 20; 
let grosspay;


if (hoursWorked <= 40) { 
    //no overtime.
    grossPay = payRate * hoursWorked;

}

else if (hoursWorked > 40){
    //overtime
    let overTime= hoursWorked -40;
    grossPay = (overTime * (payRate * 1.5)) + (payRate * (hoursWorked-overTime))
}
