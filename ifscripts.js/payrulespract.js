"use strict"



payRate = 12.50;
hoursWorked = 20;
overTime = 1.5;

if (hoursWorked <= 40) {
    //no overtime
    grossPay = payRate * hoursWorked;
    console.log ("no overtime");
 }

 else if (hoursWorked => 40) {
    grossPay = hoursWorked * payrate * overTime;
  }
