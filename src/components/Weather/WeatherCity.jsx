var React = require('react');
const Icon = require('react-icon');

var d = new Date();

var WeatherCity = React.createClass({

    render: function() {
        var colorWhite = {
            color: "white"
        };

        var divStyle = {
            backgroundColor: "#a1a1a1",
            height: "auto",
            padding: 20,
            marginTop: 20
        };

        if(this.props.headingColor){
            divStyle.backgroundColor = this.props.headingColor;
        };

        var smallTopMargin = {
            marginTop: -10
        };

        var mainTempText = {
            color: "white",
            fontSize: 60,
            fontWeight: "bold"
        };

        return (
            <div className="col-sm-12" style={divStyle}>
                <div className="row">
                    <div className="col-sm-8 pull-left" style={colorWhite}>
                        <div style={colorWhite, smallTopMargin}><h3><strong>{this.props.cityName}</strong>, {this.props.countryName}</h3></div>
                        <div style={colorWhite, smallTopMargin}>{d.toDateString()}</div>
                    </div>
                    <div className="col-sm-2 pull-right">
                        <Icon glyph="search fa-lg" style={colorWhite} />
                    </div>
                </div>
                <div className="col-sm-12 text-center">
                    <span><img src={this.props.mainIcon} /></span>
                    <p style={mainTempText}>{this.props.temperature}&#186;</p>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-center" style={colorWhite}>
                        <span><Icon glyph="arrows"/></span><span style={colorWhite}> Wind dir. </span>
                        <span><strong>{this.props.windDirection}</strong></span><span> deg</span>
                    </div>
                    <div className="col-sm-6 text-center" style={colorWhite}>
                        <span><Icon glyph="arrow-right"/></span><span style={colorWhite}> Wind sp. </span>
                        <span><strong> {this.props.windSpeed}</strong></span><span> mph</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherCity;
