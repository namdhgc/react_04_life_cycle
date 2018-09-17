import React from 'react';
import ReactDOM from 'react-dom';
import { ListMemberScreen } from 'containers';

class HomeContainer extends React.Component {

	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ListMemberScreen />
    	</div>
    );
  }
}

const domContainer = document.querySelector('#root_element_for_react');
ReactDOM.render(<HomeContainer />, domContainer);