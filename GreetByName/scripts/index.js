"use strict";

window.onload = init;

function init (){
        const GreetTheUser = document.getElementById ("greetTheUserBtn")
        GreetTheUser.onclick = GreetTheUserClicked
}


function GreetTheUserClicked (){

    let userName = document.getElementById("nameField").value;
    let message = "Hello " + userName;
    alert(message)
        

}