var React = require('react');

var WeatherListItem = React.createClass({
    render: function() {
        return (
            <li className="col-sm-12 list-group-item">
                <div className="col-sm-5 pull-left">{this.props.date}</div>
                <div className="col-sm-3 text-center">{this.props.icon}</div>
                <div className="col-sm-4 pull-right text-center">
                    <span>{this.props.min}</span><span>/</span><span>{this.props.max}</span>
                </div>
            </li>
        );
    }
});

module.exports = WeatherListItem;
