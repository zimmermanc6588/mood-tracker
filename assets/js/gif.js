// 55L1FEuI3s75xESs6EeHvTCkRJreLIsO <-- Giphy API key
const button = document.getElementById(`save-mood`);

let APIKEY = `55L1FEuI3s75xESs6EeHvTCkRJreLIsO`;

// Create a function called `myFunction()`
function giphyMe(event) {
    event.preventDefault();
    // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
    // Use `.value` to capture the value of the input and store it in the variable
    var searchTerm = document.getElementById(`mood`).value;
    // Make a `fetch` request concatenating the `searchTerm` to the query URL
    // Remember to add your API key at the end
    fetch(
      'https://api.giphy.com/v1/gifs/search?q=' +
        searchTerm +
        '&rating=g&api_key=55L1FEuI3s75xESs6EeHvTCkRJreLIsO&limit=1'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.data[0]);
        // Create a variable that will select the <div> where the GIF will be displayed
        var responseContainerEl = document.querySelector('#response-container');
        // Empty out the <div> before we append a GIF to it
        responseContainerEl.innerHTML = '';
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
        gifImg.classList = "gif-img"
        // Append 'gifImg' to the <div>
        responseContainerEl.appendChild(gifImg);
      });
  }


  button.addEventListener(`click`, giphyMe);

// const loadGif = async () => {
//     try {
//         const url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`
//         const res = await fetch(url);
//         console.log(res.ok)
//         const gif = await res.json();
//         return gif;
//     }catch(err) {
//         console.error(err)
//     }    
//     document.getElementById("giphyme").innerHTML = '<center><img src = "'+gif+'"  title="GIF via Giphy"></center>';
// };

// loadGif().then((gif) => console.log(gif));
