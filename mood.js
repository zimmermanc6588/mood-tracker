
$(document).ready(function(){
    $('select').formSelect();
  });
        
  

let userInput = [];

let saveBtnEl = document.getElementById("save-mood");

function storeUserInput(event) {

  event.preventDefault();
    
  let dropdownEl = document.getElementById("mood").value;
  let textInputEl = document.getElementById("activity").value;
  
  userInput.push(dropdownEl + ", " + textInputEl);
  localStorage.setItem("userInput", JSON.stringify(userInput));
  let userData = (JSON.parse(localStorage.getItem("userInput")));

  let loggedMood = document.createElement("ul");
  loggedMood.classList = "collection with-header"
  document.getElementById("moods-list").appendChild(loggedMood)
  let header = document.createElement("li")
  header.textContent = "My Logged Moods and Activities"
  header.classList = "collection-header"
  loggedMood.appendChild(header);

  let moodListItem = document.createElement("li");
  moodListItem.textContent = userData.slice(-2);
  moodListItem.classList = "collection-item"
  loggedMood.appendChild(moodListItem);

}

saveBtnEl.addEventListener("click", storeUserInput);
