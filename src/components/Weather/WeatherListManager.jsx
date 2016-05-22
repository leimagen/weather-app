var React = require('react');
var WeatherListItem = require('./WeatherListItem.jsx');
var HTTP = require('../../services/httpservice');

var WeatherListManager = React.createClass({
    getInitialState: function(){
        return {weatherData:[]};
    },

    componentWillMount: function(){
        HTTP.get('london')
        .then(function(data) {
            this.setState({weatherData: data});
        }.bind(this));
    },

    render: function() {
        var d = new Date();
        var WeatherListItems = this.state.weatherData.map(function(item) {
            return <WeatherListItem key={item.weather.id} date={d.toDateString()} icon={item.weather.icon} min={item.weather.temp_min} max={item.weather.temp_max} />;
        });

        return (
            <ul className="list-group">{WeatherListItems}</ul>
        );
    }
});

module.exports = WeatherListManager;
