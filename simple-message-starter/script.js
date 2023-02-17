window.onload = function (){
    let speechBubbleElement = document.createElement("div");
    // attaching speech-bubble css to the line below
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "..."
    // attaching message-box css to the line below
    messageBox.id ="message-box";
    
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);

}
// '''to display message'''
function showMessage() {
    let message = document.getElementById("message-field-1").value;
    let message2 = document.getElementById("message-field-2").value;
    // the above .getElementById "message-field-1" & "message-field-2" are located in the html 
    console.log(message);
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message+ " " + message2;
    // innerText is what's in the paragraph
    // message
    // using the id gives it the difference between the 2 fields 
    // + " " + gives it the space between 

}
