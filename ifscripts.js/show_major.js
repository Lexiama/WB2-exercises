

"use strict";

// TWO VARIABLES
let studentName;
let studentMajor;

// INFORMATION

const majors = {
    "BIOL": {
        "name": "Biology",
        "location": "Science Bldg, Room 310"
    },
    "CSCI": {
        "name": "Computer Science",
        "location": "Sheppard Hall, Room 314"
    }
};

// INPUT

studentName = "Betty";
studentMajor = "CSCI".toUpperCase();

let majorDetails = majors[studentMajor];

if (majorDetails) {
    let majorName = majorDetails.name;
    let majorLocation = majorDetails.location;

    // OUTPUT 

    console.log("Student: " + studentName + " .. Major: " + majorName + " .. Advising Location: " + majorLocation);
} else {
    console.log(`Sorry, the major code ${studentMajor} is not recognized in our system.`);
}
