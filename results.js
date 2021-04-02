

const urlParams = new URLSearchParams(window.location.search);

function getLeft() {

    let requestUrl = "https://content.guardianapis.com/search?api-key=bf8a9a71-42eb-45a3-b875-4ca0403476c9&q=abortion&page-size=2";


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response)
            const list = response.response.results;
            for (var i = 0; i < list.length; i++) {

                var createTitle = document.createElement('h2');
                var createUrl = document.createElement('li');


                createTitle.textContent = list[i].webTitle;
                document.getElementById("leftTitle").appendChild(createTitle);

                createUrl.textContent = list[i].webUrl;
                document.getElementById("leftList").appendChild(createUrl);
            };


        })
}

getLeft();

function getNews() {

    let requestNews = "https://webit-news-search.p.rapidapi.com/search?q=abortion&language=en&number=2&offset=0";

    fetch
}

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://webit-news-search.p.rapidapi.com/search?q=abortion&language=en&number=2&offset=0",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "358c852da2msh699d39cfdab461bp16e990jsn71c4b9fbd683",
		"x-rapidapi-host": "webit-news-search.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


// function getRight() {

//     let requestUrl = "http://api.mediastack.com/v1/news?access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=foxnews&limit=2";


//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             const list = data.data;
//             for (var i=0; i < list.length; i++) {

//                 var createTitle = document.createElement('h2');
//                 var createDetails = document.createElement('p');
//                 var createUrl = document.createElement('li');


//                 createTitle.textContent = list[i].title;
//                 document.getElementById("rightNews").appendChild(createTitle);

//             // link.textContent = data[i].html_url;
//             // link.href = data[i].html_url
//         };


//         })
// }

// getRight()


// function getMid() {

//     let requestUrl = "http://api.mediastack.com/v1/news?access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=skynews&limit=2";


//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             const list = data.data;
//             for (var i=0; i < list.length; i++) {

//                 var createTitle = document.createElement('h2');
//                 var createDetails = document.createElement('p');
//                 var createUrl = document.createElement('li');


//                 createTitle.textContent = list[i].title;
//                 document.getElementById("independent").appendChild(createTitle);

//             // link.textContent = data[i].html_url;
//             // link.href = data[i].html_url
//         };


//         })
// }

// getMid()