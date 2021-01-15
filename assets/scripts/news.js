var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b126b902cffa42bbbd712974970ba00e';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })