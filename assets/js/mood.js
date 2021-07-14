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
  moodListItem.textContent = userData.slice(-2);
  moodListItem.classList = "collection-item"
  let header = document.getElementById("list-header")
  header.appendChild(moodListItem);
}

saveBtnEl.addEventListener("click", storeUserInput);
