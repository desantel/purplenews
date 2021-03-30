$.ajax({
    url: 'https://api.mediastack.com/v1/news',
    data: {
      access_key: '9cadc30aa267db3259e711368c64ecb9',
      languages: 'en',
      countries: 'us',
      limit: 30,
      offset: 30,
    }
  }).done(function(data) {
    console.log(JSON.parse(data));
});