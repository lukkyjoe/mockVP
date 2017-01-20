var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function() {
    return (
      <p>Hello, Victor!</p>
    )
  }
});

window.Greeting = Greeting;
window.React = React;
window.ReactDOM = ReactDOM;

ReactDOM.render(
  <Greeting/>,
  document.getElementById('greeting-div')
);