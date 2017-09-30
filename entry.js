import React from 'react';
import { render } from 'react-dom';
//import Hello from './hello';

var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
