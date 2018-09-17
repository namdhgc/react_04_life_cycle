import React from 'react';
import ReactDOM from 'react-dom';
import { Member } from 'components';

export default class ListMemberScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ members: data })
    })
  }

  makeListMembers() {
    let { members } = this.state;
    if (!members) {
      return <Member />
    }
    return members.map((mem) => {
      // <Member member={mem} />
      <tr>
        <td>{mem.id}</td>
        <td>{mem.username}</td>
      </tr>
    })
  }

  render() {
    const listMembers = this.makeListMembers();
    return (
      <div>
        ListMemberScreen
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Username</td>
            </tr>
          </thead>
          <tbody>
            {listMembers}
          </tbody>
        </table>
      </div>
    );
  }
}
