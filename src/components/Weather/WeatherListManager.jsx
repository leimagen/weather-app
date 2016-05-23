var React = require('react');
var WeatherListItem = require('./WeatherListItem.jsx');

var WeatherListManager = React.createClass({
    render: function() {
        if(this.props.data){

            var forecastDate1 = this.props.data.list[10].dt_txt;
            var forecastIcon1Url = 'http://openweathermap.org/img/w/' + this.props.data.list[10].weather[0].icon + '.png';
            var forecastMin1 = Math.round(this.props.data.list[0].main.temp_min);
            var forecastMax1 = Math.round(this.props.data.list[0].main.temp_max);

            var forecastDate2 = this.props.data.list[18].dt_txt;
            var forecastIcon2Url = 'http://openweathermap.org/img/w/' + this.props.data.list[18].weather[0].icon + '.png';
            var forecastMin2 = Math.round(this.props.data.list[0].main.temp_min);
            var forecastMax2 = Math.round(this.props.data.list[0].main.temp_max);

            var forecastDate3 = this.props.data.list[26].dt_txt;
            var forecastIcon3Url = 'http://openweathermap.org/img/w/' + this.props.data.list[26].weather[0].icon + '.png';
            var forecastMin3 = Math.round(this.props.data.list[0].main.temp_min);
            var forecastMax3 = Math.round(this.props.data.list[0].main.temp_max);

            var forecastDate4 = this.props.data.list[34].dt_txt;
            var forecastIcon4Url = 'http://openweathermap.org/img/w/' + this.props.data.list[34].weather[0].icon + '.png';
            var forecastMin4 = Math.round(this.props.data.list[0].main.temp_min);
            var forecastMax4 = Math.round(this.props.data.list[0].main.temp_max);
        }

        return (
            <table className="table table-striped">
                <tbody>
                    <WeatherListItem date={forecastDate1} foreIcon={forecastIcon1Url} min={forecastMin1} max={forecastMax1} />
                    <WeatherListItem date={forecastDate2} foreIcon={forecastIcon2Url} min={forecastMin2} max={forecastMax2} />
                    <WeatherListItem date={forecastDate3} foreIcon={forecastIcon3Url} min={forecastMin3} max={forecastMax3} />
                    <WeatherListItem date={forecastDate4} foreIcon={forecastIcon4Url} min={forecastMin4} max={forecastMax4} />
                </tbody>
            </table>
        );
    }
});

module.exports = WeatherListManager;
