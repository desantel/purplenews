var searchResults = document.getElementById("search-results");
var searchButton = document.getElementById("search-button");



function handleClick() {
    const date = $('#dates').val();
    const topic = $('#topic').val();

    window.location = `results.html?topic=${topic}&date=${date}`;
}
    /*"data"
    
function displayResults() {
    "pagination": {
        "limit": 100,
    }
}
*/