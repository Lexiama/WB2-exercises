"use strict"
//Hours worked

// If hours are over 40: overhours
// If hours are under 40: underhours
// otherwise: exactly 40 hours

//if hours are underhours

let payRate = 12.50;
let hoursWorked = 20; 
let grossPay;

if (hoursWorked <= 40) { 
    //no overtime.
    grossPay = payRate * hoursWorked;
    console.log("no overtime");

}
else {

    //overtime
    let overTime = hoursWorked - 40;   
    grossPay = (overTime * (payRate * 1.5)) + (payRate * (hoursWorked-overTime))
    console.log("overtime")
}

//The subtraction -40 is used to find the difference between the total hours worked and the standard 40-hour workweek, 
//which gives you the overtime hours.
// This is a common way to calculate overtime pay based on the extra hours worked beyond the standard workweek.