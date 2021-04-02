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
