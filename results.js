const urlParams = new URLSearchParams(window.location.search);

function getLeft() {

    let requestUrl = "http://api.mediastack.com/v1/news?access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=cnn&limit=2";


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
                document.getElementById("leftNews").appendChild(createTitle);

            // link.textContent = data[i].html_url;
            // link.href = data[i].html_url
        };
        

        })
}

getLeft();

function getRight() {

    let requestUrl = "http://api.mediastack.com/v1/news?access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=foxnews&limit=2";


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
                document.getElementById("rightNews").appendChild(createTitle);

            // link.textContent = data[i].html_url;
            // link.href = data[i].html_url
        };
        

        })
}

getRight()


function getMid() {

    let requestUrl = "http://api.mediastack.com/v1/news?access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=skynews&limit=2";


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
                document.getElementById("independent").appendChild(createTitle);

            // link.textContent = data[i].html_url;
            // link.href = data[i].html_url
        };
        

        })
}

getMid()