var React = require('react');
var WeatherListItem = require('./WeatherListItem.jsx');

var WeatherListManager = React.createClass({
    getInitialState: function(){
        return {weatherDays:[
            {
                "id": "3216546",
                "date": "26 Aug 2016",
                "icon": "Sol",
                "min": 16,
                "max": 24
            },
            {
                "id": "56496362",
                "date": "27 Aug 2016",
                "icon": "Nub",
                "min": 13,
                "max": 20
            },
            {
                "id": "8725218",
                "date": "28 Aug 2016",
                "icon": "Llu",
                "min": 18,
                "max": 30
            },
            {
                "id": "89542632",
                "date": "29 Aug 2016",
                "icon": "Sol",
                "min": 19,
                "max": 35
            }
        ]};
    },

    render: function() {
        var WeatherListItems = this.state.weatherDays.map(function(item) {
            return <WeatherListItem key={item.id} date={item.date} icon={item.icon} min={item.min} max={item.max} />;
        });

        return (
            <ul className="list-group">{WeatherListItems}</ul>
        );
    }
});

module.exports = WeatherListManager;
