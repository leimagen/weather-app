var React = require('react');

var WeatherListItem = React.createClass({
    render: function() {

        var centerText = {
            textAlign: "center",
        };

        var iconStyle = {
            width: 30,
            height: 30
        }

        return (
            <tr style={centerText}>
                <td><h6>{this.props.date}</h6></td>
                <td><img src={this.props.foreIcon} style={iconStyle} /></td>
                <td><h6>Min {this.props.min}&#186; / Max {this.props.max}&#186;</h6></td>
            </tr>
        );
    }
});

module.exports = WeatherListItem;
