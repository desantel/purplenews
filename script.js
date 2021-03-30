var searchResults = document.getElementById("search-results");
var searchButton = document.getElementById("search-button");

function getApi() {

    var requestUrl = "http://api.mediastack.com/v1/news?access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&";


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i=0; i<data.length; i++) {
                var createTitle = document.createElement('h2');
                var createDetails = document.createElement('p');
                var createUrl = document.createElement('li');


            link.textContent = data[i].html_url;
            link.href = data[i].html_url
        };

        })

searchButton.addEventListener("click", getApi);
