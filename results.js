function giphy() {
    let APIKEY = "UxcQX2JHJErGhjeoYu718TgqyX3duWJs";
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
            ev.preventDefault(); //to stop the page reload
            let url = `https://api.giphy.com/v1/gifs/search?api_key=UxcQX2JHJErGhjeoYu718TgqyX3duWJs&limit=5&q=`;
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(content => {
                    //  data, pagination, meta
                    console.log(content.data);
                    for (let i = 0; i <= content.data.length; i++) {
                        // console.log("META", content.meta);
                        let fig = document.createElement("figure");
                        let img = document.createElement("img");
                        let fc = document.createElement("figcaption");
                        img.src = content.data[i].images.downsized.url;
                        img.alt = content.data[i].title;
                        fc.textContent = content.data[i].title;
                        fig.appendChild(img);
                        fig.appendChild(fc);
                        let out = document.querySelector(".out");
                        out.insertAdjacentElement("afterbegin", fig);
                        document.querySelector("#search").value = "";
                    }



                })
                .catch(err => {
                    console.error(err);
                });
        });
    }
}
giphy()

function gNews() {
    let APIKEY = "&token=ccab3a39b0af9f7515a150bcfab8adb3&lang=en&max=2&country=us";
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
            ev.preventDefault(); //to stop the page reload
            let url = `https://gnews.io/api/v4/search?q=` + document.querySelector("#search").value + APIKEY;
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(totalarticles => {
                    //  data, pagination, meta
                    console.log(totalarticles);
                    const list = totalarticles.articles
                    for (let i = 0; i <= list.length; i++) {
                        // console.log("META", content.meta);
                        // let fig = document.createElement("figure");
                        // let img = document.createElement("img");
                        // let fc = document.createElement("figcaption");

                        var createTitle = document.createElement('h3');
                        var createDetails = document.createElement('p');


                        // createTitle.textContent = list[i].title;
                        // document.getElementById("leftNews").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("leftNews").appendChild(createDetails);

                        // createTitle.textContent = list[i].title;
                        // document.getElementById("rightNews").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("rightNews").appendChild(createDetails);

                        createTitle.textContent = list[i].title;
                        document.getElementById("independent").appendChild(createTitle);
                        createDetails.textContent = list[i].description;
                        document.getElementById("independent").appendChild(createDetails);

                        // img.src = content.data[i].totalarticles.articles.title;
                        // img.alt = content.data[i].title;
                        // fc.textContent = content.data[i].title;
                        // fig.appendChild(img);
                        // fig.appendChild(fc);
                        // let out = document.querySelector(".out");
                        // out.insertAdjacentElement("afterbegin", fig);
                        // document.querySelector("#search").value = "";
                    }



                })
                .catch(err => {
                    console.error(err);
                });
        });
    }
}
gNews()

function gNews() {
    let APIKEY = "&token=ccab3a39b0af9f7515a150bcfab8adb3&lang=en&max=2&country=us";
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
            ev.preventDefault(); //to stop the page reload
            let url = `https://gnews.io/api/v4/search?q=` + document.querySelector("#search").value + APIKEY;
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(totalarticles => {
                    //  data, pagination, meta
                    console.log(totalarticles);
                    const list = totalarticles.articles
                    for (let i = 0; i <= list.length; i++) {
                        // console.log("META", content.meta);
                        // let fig = document.createElement("figure");
                        // let img = document.createElement("img");
                        // let fc = document.createElement("figcaption");

                        var createTitle = document.createElement('h3');
                        var createDetails = document.createElement('p');


                        // createTitle.textContent = list[i].title;
                        // document.getElementById("leftNews").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("leftNews").appendChild(createDetails);

                        createTitle.textContent = list[i].title;
                        document.getElementById("rightNews").appendChild(createTitle);
                        createDetails.textContent = list[i].description;
                        document.getElementById("rightNews").appendChild(createDetails);

                        // createTitle.textContent = list[i].title;
                        // document.getElementById("independent").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("independent").appendChild(createDetails);

                        // img.src = content.data[i].totalarticles.articles.title;
                        // img.alt = content.data[i].title;
                        // fc.textContent = content.data[i].title;
                        // fig.appendChild(img);
                        // fig.appendChild(fc);
                        // let out = document.querySelector(".out");
                        // out.insertAdjacentElement("afterbegin", fig);
                        // document.querySelector("#search").value = "";
                    }



                })
                .catch(err => {
                    console.error(err);
                });
        });
    }
}
gNews()

//“https://content.guardianapis.com/search?api-key=bf8a9a71-42eb-45a3-b875-4ca0403476c9&q=abortion&page-size=2”;

function guard() {
    let APIKEY = "api-key=bf8a9a71-42eb-45a3-b875-4ca0403476c9&";
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
            ev.preventDefault(); //to stop the page reload
            let url = `https://content.guardianapis.com/search?` + APIKEY + "page-size=2&q=";
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    //  data, pagination, meta
                    console.log(response.response.results);
                    const list = response.response.results
                    for (let i = 0; i <= list.length; i++) {
                        // console.log("META", content.meta);
                        // let fig = document.createElement("figure");
                        // let img = document.createElement("img");
                        // let fc = document.createElement("figcaption");

                        var createTitle = document.createElement('h3');
                        var createDetails = document.createElement('p');


                        createTitle.textContent = list[i].webTitle;
                        document.getElementById("leftNews").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("leftNews").appendChild(createDetails);

                        // createTitle.textContent = list[i].title;
                        // document.getElementById("rightNews").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("rightNews").appendChild(createDetails);

                        // createTitle.textContent = list[i].title;
                        // document.getElementById("independent").appendChild(createTitle);
                        // createDetails.textContent = list[i].description;
                        // document.getElementById("independent").appendChild(createDetails);

                        // img.src = content.data[i].totalarticles.articles.title;
                        // img.alt = content.data[i].title;
                        // fc.textContent = content.data[i].title;
                        // fig.appendChild(img);
                        // fig.appendChild(fc);
                        // let out = document.querySelector(".out");
                        // out.insertAdjacentElement("afterbegin", fig);
                        // document.querySelector("#search").value = "";
                    }



                })
                .catch(err => {
                    console.error(err);
                });
        });
    }
}
guard()

// function getLeft() {


//     let url = "https://gnews.io/api/v4/search?q=none"
//     let api = "&token=ccab3a39b0af9f7515a150bcfab8adb3&lang=en&max=2"
//     let requestUrl = url + api;


//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (totalarticles) {
//             console.log(totalarticles)
//             const list = totalarticles.articles;
//             for (var i = 0; i < list.length; i++) {

//                 var createTitle = document.createElement('h2');
//                 var createDetails = document.createElement('p');
//                 var createUrl = document.createElement('li');


//                 createTitle.textContent = list[i].title;
//                 document.getElementById("leftNews").appendChild(createTitle);
//                 createDetails.textContent = list[i].description;
//                 document.getElementById("leftNews").appendChild(createDetails);

//                 // link.textContent = data[i].html_url;
//                 // link.href = data[i].html_url
//             };


//         })
// }

// getLeft();

// function getRight() {

//     let requestUrl = "http://api.mediastack.com/v1/news?access_key=ed9334e655d19be1cec40729f09d7c74&languages=en&sources=foxnews&limit=2";


//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             const list = data.data;
//             for (var i = 0; i < list.length; i++) {

//                 var createTitle = document.createElement('h2');
//                 var createDetails = document.createElement('p');
//                 var createUrl = document.createElement('li');


//                 createTitle.textContent = list[i].title;
//                 document.getElementById("rightNews").appendChild(createTitle);
//                 createDetails.textContent = list[i].description;
//                 document.getElementById("rightNews").appendChild(createDetails);

//                 // link.textContent = data[i].html_url;
//                 // link.href = data[i].html_url
//             };


//         })
// }

// getRight()


// function getMid() {

//     let requestUrl = "http://api.mediastack.com/v1/news?access_key=ed9334e655d19be1cec40729f09d7c74&languages=en&sources=skynews&limit=2";


//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             const list = data.data;
//             for (var i = 0; i < list.length; i++) {

//                 var createTitle = document.createElement('h2');
//                 var createDetails = document.createElement('p');
//                 var createUrl = document.createElement('li');


//                 createTitle.textContent = list[i].title;
//                 document.getElementById("independent").appendChild(createTitle);
//                 createDetails.textContent = list[i].description;
//                 document.getElementById("independent").appendChild(createDetails);

//                 // link.textContent = data[i].html_url;
//                 // link.href = data[i].html_url
//             };


//         })
// }

// getMid()
