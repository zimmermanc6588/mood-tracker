var apiurl ="https://type.fit/api/quotes";
// fetch(apiurl)
// .then(function(response) {
//     response.json().then(function(data) {
//       displayQuote()
      
//     });
//   });


    

async function getQuote() {
   const response = await fetch(apiurl).then(response => {
     return response.json()
   })

   console.log("response", response)
   // make this random based on lenght of array returned
   displayQuote(response[0].text);

}



const newQuoteButton =document.querySelector("#js-new-quote");
newQuoteButton.addEventListener('click', getQuote);

function displayQuote(quote) {
    const quoteText =document.querySelector('#js-quote-text');
    quoteText.textContent=quote;
}