var apiurl ="https://type.fit/api/quotes";
// fetch(apiurl)
// .then(function(response) {
//     response.json().then(function(data) {
//       displayQuote()
      
//     });
//   });

/**
 * [a, b, c]
 * 0 1 2
 * math.random()->0-.9999999999999999999999999999
 * .00000000000001*3--> .00000003 flooreed 0
 * .66666666666667*3-->2.0000000000001 floored 2
 * 
 */
    

async function getQuote() {
   const response = await fetch(apiurl).then(response => {
     return response.json()
     
   })

   console.log("response", response)
   // make this random based on lenght of array returned
//I want my response to use  // Generates a random number between 0 
      // and the length of the dataset
     let index = Math.floor(Math.random()*response.length);
    
      // Stores the quote present at the randomly generated index
      let ranQuote = response[index].text;
      let chosenAuthor = response[index].author
console.log(ranQuote)
   displayQuote(ranQuote, chosenAuthor);

}

//let index = Math.floor(Math.random()*data.length);
    
// Stores the quote present at the randomly generated index
//let quote = data[index].text;

const newQuoteButton =document.querySelector("#js-new-quote");
newQuoteButton.addEventListener('click', getQuote);


function displayQuote(quote, author) {
    const quoteText =document.querySelector('#js-quote-text');
    quoteText.textContent=`"${quote}" - ${author}`;
}
