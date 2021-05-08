// Define DOM elements
const search = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");
const left = document.getElementById("left");
const results = document.getElementById("results");

// create an event lis for button
btnSearch.addEventListener("click", ev => {
    ev.preventDefault()
    console.log("You clicked a button")
    //Run GIPHY 
    // giphy();
    //Run GNews
    gnew()
    //Run Gardian
    getNew()
    // Save the last search
    storeSearch(search.value)
})

// Functions
// function giphy() {
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=UxcQX2JHJErGhjeoYu718TgqyX3duWJs&limit=4&q=`;
//     let str = search.value.trim();
//     url = url.concat(str);
//     fetch(url)
//         .then(response => response.json())
//         .then(content => {
//             for (let i = 0; i <= content.data.length; i++) {
//                 let fig = document.createElement("figure");
//                 let img = document.createElement("img");
//                 let fc = document.createElement("figcaption");
//                 img.src = content.data[i].images.downsized.url;
//                 img.alt = content.data[i].title;
//                 fc.textContent = content.data[i].title;
//                 document.getElementById("gif").appendChild(img);
//                 document.getElementById("gif").appendChild(fc);
//                 let out = document.querySelector(".out");
//                 out.append(fig);
//                 search.value = "";
//             }
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }
function gnew() {
    let APIKEY = "access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=foxnews&keyword=";
            let url = `http://api.mediastack.com/v1/news?`  + APIKEY;
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    //  data, pagination, meta
                    console.log(data);
                    const list = data
                    for (let i = 0; i <= list.length; i++) {
                        var createTitle = document.createElement('h5');
                        var createDetails = document.createElement('p');
                        createTitle.textContent = list;
                        document.getElementById("rightNews").appendChild(createTitle);
                        createDetails.textContent = list;
                        document.getElementById("rightNews").appendChild(createDetails);

                    }

                })
                .catch(err => {
                    console.error(err);
                });

}

function getNew() {
    let APIKEY = "access_key=1f9d996f61966e44c53513fb9d96f5a7&categories=general&languages=en&sources=cnn&keyword=";
            let url = `http://api.mediastack.com/v1/news?`  + APIKEY;
            let str = document.getElementById("search").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    //  data, pagination, meta
                    console.log(data);
                    const list = data
                    for (let i = 0; i <= list.length; i++) {
                        var createTitle = document.createElement('h5');
                        var createDetails = document.createElement('p');
                        createTitle.textContent = list[i].title;
                        document.getElementById("leftNews").appendChild(createTitle);
                        createDetails.textContent = list[i].description;
                        document.getElementById("leftNews").appendChild(createDetails);
                    }

                })
                .catch(err => {
                    console.error(err);
                });

}


//“https://content.guardianapis.com/search?api-key=bf8a9a71-42eb-45a3-b875-4ca0403476c9&q=abortion&page-size=2”;
// function gardian() {
//     let APIKEY = "api-key=bf8a9a71-42eb-45a3-b875-4ca0403476c9&";

//             let url = `https://content.guardianapis.com/search?` + APIKEY + "page-size=2&q=";
//             let str = document.getElementById("search").value.trim();
//             url = url.concat(str);
//             console.log(url);
//             fetch(url)
//                 .then(response => response.json())
//                 .then(response => {
//                     console.log(response.response.results);
//                     const list = response.response.results
//                     for (let i = 0; i <= list.length; i++) {
//                         var createTitle = document.createElement('h5');
//                         var createDetails = document.createElement('p');
//                         createTitle.textContent = list[i].webTitle;
//                         document.getElementById("leftNews").appendChild(createTitle);
                        
//                     }
            
//                 })
//                 .catch(err => {
//                     console.error(err);
//                 });
  



// }


function storeSearch(search) {

    localStorage.setItem("search", search);
    let lastSearch = localStorage.getItem("search")
    console.log(lastSearch);

}

