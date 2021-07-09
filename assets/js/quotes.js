var apiurl ="https://type.fit/api/quotes";
fetch(apiurl)
.then(response => response.json())
    .then(data => console.log(data));
    

