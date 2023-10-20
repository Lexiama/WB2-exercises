"use strict";


window.onload = init;

function init() { 
    let greetTheUserBtn = document.getElementById("greetTheUserBtn");
    greetTheUserBtn.onclick = greetTheUserBtnClicked;
}


function greetTheUserBtnClicked () { 

    let nameField = document.getElementById("nameField");
    let userName = nameField.value;
    console.log(userName) 
    let message = " hello " + userName; 
    alert(message); 
}