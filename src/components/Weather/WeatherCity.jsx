var React = require('react');

var WeatherCity = React.createClass({
    render: function() {

        var divStyle = {
            backgroundColor: "#79b8af",
            height: "auto",
            padding: 20
        }

        return (
            <div className="col-sm-12" style={divStyle}>
                <div className="row">
                    <div className="col-sm-10 pull-left">
                        <div>City, Country</div>
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
