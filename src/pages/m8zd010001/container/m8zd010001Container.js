import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('m8zd010001Store')
@observer
class m8zd010001Container extends Component {
  render() {
    const { user, selectMemberList } = this.props.m8zd010001Store;
    return (
      <div>
        <h1>{user}</h1>
        <button onClick = { selectMemberList }>클릭</button>
      </div>
    );
  }
}

export default m8zd010001Container;