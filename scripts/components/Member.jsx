import React from 'react';
import ReactDOM from 'react-dom';

export default class Member extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      member: null,
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("======================");
  //   console.log('nextProps');
  //   console.log(nextProps);
  //   console.log('prevState');
  //   console.log(prevState);

  //   return {
  //     member: nextProps
  //   };
  // }

  render() {
    console.log('this.props')
    console.log(this.props)
    console.log('this.state')
    console.log(this.state)
    return (
      <tr>
        <td>{this.props.member ? this.props.member.id : ''}</td>
        <td>{this.props.member ? this.props.member.name : ''}</td>
        <td>{this.props.member ? this.props.member.email : ''}</td>
        <td>{this.props.member ? this.props.member.username : ''}</td>
      </tr>
    );
  }
}