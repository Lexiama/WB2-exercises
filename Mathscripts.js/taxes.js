"use strict";

// Example value for x
var x = 150;  

var taxRate = 0.23;
var taxesWithheld = x * taxRate;

// Convert the taxesWithheld to a string with two digits of precision
var displayedTaxes = taxesWithheld.toFixed(2);

console.log("With a salary of $" + x + ", $" + displayedTaxes + " is withheld for federal taxes.");
