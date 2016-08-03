var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundations
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>ReactBestBoilerplate</p>,
  document.getElementById("app")
);
