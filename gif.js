// 55L1FEuI3s75xESs6EeHvTCkRJreLIsO <-- Giphy API key

let APIKEY = `55L1FEuI3s75xESs6EeHvTCkRJreLIsO`;

const loadGif = async () => {
    try {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`
        const res = await fetch(url);
        console.log(res.ok)
        const gif = await res.json();
        return gif;
    }catch(err) {
        console.error(err)
    }    
    document.getElementById("giphyme").innerHTML = '<center><img src = "'+gif+'"  title="GIF via Giphy"></center>';
};

loadGif().then((gif) => console.log(gif));




// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/
// document.addEventListener("DOMContentLoaded", init);
// function init() {
//   document.getElementById("btnSearch").addEventListener("click", ev => {
//     ev.preventDefault(); //to stop the page reload
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
//     let str = document.getElementById("search").value.trim();
//     url = url.concat(str);
//     console.log(url);
//     fetch(url)
//       .then(response => response.json())
//       .then(content => {
//         //  data, pagination, meta
//         console.log(content.data);
//         console.log("META", content.meta);
//         let fig = document.createElement("figure");
//         let img = document.createElement("img");
//         let fc = document.createElement("figcaption");
//         img.src = content.data[0].images.downsized.url;
//         img.alt = content.data[0].title;
//         fc.textContent = content.data[0].title;
//         fig.appendChild(img);
//         fig.appendChild(fc);
//         let out = document.querySelector(".out");
//         out.insertAdjacentElement("afterbegin", fig);
//         document.querySelector("#search").value = "";
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   });
// }