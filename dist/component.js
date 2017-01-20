'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  displayName: 'Greeting',

  render: function render() {
    return React.createElement(
      'p',
      null,
      'Hello, Victor!'
    );
  }
});

window.Greeting = Greeting;
window.React = React;
window.ReactDOM = ReactDOM;

ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting-div'));