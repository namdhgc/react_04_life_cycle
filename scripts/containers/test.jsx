import React from 'react';
import ReactDOM from 'react-dom';

class HelloBtn extends React.Component {

	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        Hello world
    	</div>
    );
  }
}

const domContainer = document.querySelector('#root_element_for_react');
ReactDOM.render(<HelloBtn />, domContainer);