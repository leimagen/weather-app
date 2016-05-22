var React = require('react');
var WeatherCity = require('./WeatherCity.jsx');
var WeatherListManager = require('./WeatherListManager.jsx');

var WeatherManager = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    <WeatherCity />
                </div>
                <div>
                    <WeatherListManager />
                </div>
                <div className="panel panel-default text-center">
                    <h6><small>DATA FROM OPENWEATHER.COM/API</small></h6>
                </div>
            </div>
        );
    }
});

module.exports = WeatherManager;
