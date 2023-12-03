// not good way to take input and show it using prompt,alert
// let userName = prompt("give me your first name");
// let greet = "Welcome you in lessonFour " + userName;
// let display = alert(greet);

let btnTranslate = document.querySelector("#myButton");
let txtInput = document.querySelector("#myText");
let outputDiv = document.querySelector("#output");

//  let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

let serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(inputText){
    return serverURL + "?" + "text=" + inputText;

}

function errorHandler(error){
 console.log("error occured",error);

}

function clickHandler(){
    // calling server for processing
    fetch(getTranslationURL(txtInput.value))
    .then(function responseHandler(response){
     return response.json()
    })
    .then(function logJSON(json){
    //  console.log(json)
     let translatedText = json.contents.translated;
     outputDiv.innerText = translatedText;
     })
     .catch(errorHandler)
    

    }

btnTranslate.addEventListener("click", clickHandler);











