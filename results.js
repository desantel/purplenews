const urlParams = new URLSearchParams(window.location.search);

function getApi() {

    let url = "http://api.mediastack.com/v1/news?";
    let apiKey = "access_key=1f9d996f61966e44c53513fb9d96f5a7";
    let topicType = "&categories=general";
    let language = "languages=en";


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            const list = data.data;
            for (var i=0; i < list.length; i++) {

                var createTitle = document.createElement('h2');
                var createDetails = document.createElement('p');
                var createUrl = document.createElement('li');


                createTitle.textContent = list[i].title;
                document.getElementById("results").appendChild(createTitle);

            // link.textContent = data[i].html_url;
            // link.href = data[i].html_url
        };
        

        })
}

getApi();
