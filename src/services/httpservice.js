var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/';

var service = {
    get: function(request){
        return fetch(baseUrl + request).then(function(response){
            return response.json();
        });
    }
};

module.exports = service;
