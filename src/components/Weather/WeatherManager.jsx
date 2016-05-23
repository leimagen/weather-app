var React = require('react');
var HTTP = require('../../services/httpservice');
var WeatherCity = require('./WeatherCity.jsx');
var WeatherListManager = require('./WeatherListManager.jsx');

const APIKey = '&APPID=15acb64267f5415390706b5c7e2c2b03';

var WeatherManager = React.createClass({

    getInitialState: function(){
        return {
            value: ''
        };
    },

    componentWillMount: function(){
       var mainWeatherRequest = HTTP.get('weather?q=' + this.props.city + APIKey + '&units=metric').then(function(result) {
           this.setState({weatherData: result});
           //console.log(this.state.weatherData);
       }.bind(this));

       var forecastRequest = HTTP.get('forecast?q=' + this.props.city + APIKey + '&units=metric').then(function(result) {
           this.setState({forecastData: result});
           //console.log(this.state.forecastData);
       }.bind(this));
    },

    render: function() {

        if(this.state.weatherData){
            var cityName = this.state.weatherData.name;
            var countryName = this.state.weatherData.sys.country;
            var temperature = Math.round(this.state.weatherData.main.temp);
            var mainIconImageCode = this.state.weatherData.weather[0].icon;
            var mainIconUrl = 'http://openweathermap.org/img/w/' + mainIconImageCode + '.png';
            var windDirection = Math.round(this.state.weatherData.wind.deg);
            var windSpeed = Math.round(this.state.weatherData.wind.speed);
        } else {
            var cityName = "Loading";
            var countryName = "Loading";
            var temperature = "...";
        }
        return (
            <div>
                <div>
                    <WeatherCity
                    headingColor={this.props.headingColor}
                    cityName={cityName}
                    countryName={countryName}
                    temperature={temperature}
                    mainIcon={mainIconUrl}
                    windDirection={windDirection}
                    windSpeed={windSpeed}
                    />
                </div>
                <div>
                    <WeatherListManager data={this.state.forecastData} />
                </div>
                <div className="panel panel-default text-center">
                    <h6><small>DATA FROM OPENWEATHER.COM/API</small></h6>
                </div>
            </div>
        );
    }
});

module.exports = WeatherManager;
