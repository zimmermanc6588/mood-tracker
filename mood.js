
$(document).ready(function(){
    $('select').formSelect();
  });
        
  

let userInput = [];

let saveBtnEl = document.getElementById("save-mood");

function storeUserInput(event) {

  event.preventDefault();
    
  let dropdownEl = document.getElementById("mood").value;
  let textInputEl = document.getElementById("activity").value;
  
  userInput.push(dropdownEl, textInputEl);
  localStorage.setItem("userInput", JSON.stringify(userInput));
  let userData = (JSON.parse(localStorage.getItem("userInput")));
  let moodListItem = document.createElement("li");
  moodListItem.innerHTML = userData.slice(-2);
  document.getElementById("moods-list").appendChild(moodListItem);

}

saveBtnEl.addEventListener("click", storeUserInput);
