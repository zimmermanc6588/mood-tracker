let userInput = [];

let saveBtnEl = document.getElementById("save-mood");


function storeUserInput(event) {
    event.preventDefault();
    let dropdownEl = document.getElementById("mood").value;
    let textInputEl = document.getElementById("activity").value;
    let userInputObj = {
        dropdownEl,
        textInputEl
    };
    userInput.push(userInputObj);
    localStorage.setItem("userInput", JSON.stringify(userInput));
    console.log(JSON.parse(localStorage.getItem("userInput")));
}

saveBtnEl.addEventListener("click", storeUserInput);
