var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var APIKey = '&APPID=15acb64267f5415390706b5c7e2c2b03';

var service = {
    get: function(city){
        return fetch(baseUrl + city + APIKey).then(function(response){
            return response.json();
        });
    }
};

module.exports = service;
