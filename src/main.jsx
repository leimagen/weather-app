var React = require('react');
var ReactDOM = require('react-dom');
var WeatherManager = require('./components/Weather/WeatherManager.jsx');

ReactDOM.render(<WeatherManager city="lima" headingColor="#ec4444"/>, document.getElementById('weather1'));
ReactDOM.render(<WeatherManager city="panama" headingColor="#79b8af" />, document.getElementById('weather2'));
ReactDOM.render(<WeatherManager city="caracas" headingColor="#e68e4f" />, document.getElementById('weather3'));
