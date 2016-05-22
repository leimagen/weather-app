var React = require('react');
var HTTP = require('../../services/httpservice');

var WeatherCity = React.createClass({
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

        if(this.state.weatherData) {
            var cityName = this.state.weatherData.name;
            var countryName = '';
        } else {
            var cityName = 'Loading';
            var countryName = 'Loading';
        };

        var divStyle = {
            backgroundColor: "#79b8af",
            height: "auto",
            padding: 20
        };

        return (
            <div className="col-sm-12" style={divStyle}>
                <div className="row">
                    <div className="col-sm-10 pull-left">
                        <div><p>{cityName}, {countryName}</p></div>
                        <div>Today, 25 Aug 2012</div>
                    </div>
                    <div className="col-sm-2 pull-right">Lupa</div>
                </div>
                <div className="row text-center">
                    <h1><span>ICO</span><span><strong> 25&#186;</strong></span></h1>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <h4><span>ICO</span><span> WIND DIRECTION</span></h4>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h4><span>ICO</span><span> WIND SPEED</span></h4>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherCity;
