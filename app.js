// not good way to take input and show it using prompt,alert
// let userName = prompt("give me your first name");
// let greet = "Welcome you in lessonFour " + userName;
// let display = alert(greet);

let btnTranslate = document.querySelector("#myButton");
let txtInput = document.querySelector("#myText");
let outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "translated: " + txtInput.value
    
   
 
}

btnTranslate.addEventListener("click", clickHandler);









