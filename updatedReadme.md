# Purple News
![Logo](logo.png)
![Icon](icon.png) 

## Motivation
There are many sides to a story including the news. There are so many sites that present on the same topic but will present it from a specific point of view. If the reader wants a different side to the story, they will have to search a different website. Let's be honest, how many people search liberal, conservative, and neutral sites to get the full picture of a story? Purple News was created as a one stop shop so someone can research a topic and find different perspectives. The goal is to reduce cognitive bias.

## Screenshots



## CSS Elements
The first CSS framework considered was SimpleCSS but it was extremely basic which would probably not offer a great deal of customization. It was recommended that the Foundation CSS framework be used. 

## Problems faced
- Limited API availability

## API Reference
The initial APIs that were going to be used were NewsAPI and Currents API. However, the free version for NewsAPI required CORS. The free version of Currents API did not provide access to articles. Therefore, we had to locate a different API. We chose Mediastack API which provided a variety of news sources. However, it requires HTTPS in order to be deployed on GitHub. Therefore, we use Guardian News and GNews. Both provide a sufficient API using the free version. For our third API, we used GIPHY API to add political gifs to our site that correlate with the search results.

## How to Use
To use the application, click the "Top Headlines" button the home page. You will be taken to the search page. There, please enter a search topic and click submit. You will see top news article titles and gifs that match your search query. Enjoy!

## Credits
This application was imagined, designed, and developed by:
- Rachel Handschuh @rhandschuh
- Roberto Umana @robumana
- Elizabeth de Santis @desantel
- Stephanie Davis @whatawhat
