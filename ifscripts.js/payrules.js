"use strict"
//Hours worked

// If hours are over 40: overhours
// If hours are under 40: underhours
// otherwise: exactly 40 hours

//if hours are underhours

var payRate = 12.50;
var hoursWorked = 40; 


if (hoursWorked <= 40) { 
    //no overtime.
    grossPay = payRate * hoursWorked;

}

else { 
    // overtime 
    var basePay = 40 * payRate;
    var overTimeHours = hoursWorked - 40;
    var overtimeRate = 1.5 * payRate; 

    var overTimePay = overTimeHours * overtimeRate 

    grossPay = basePay + overTimePay; 

}