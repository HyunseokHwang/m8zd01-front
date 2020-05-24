import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { autobind } from 'core-decorators';

// @autobind
@inject('m8zd010010Store')
@observer
class m8zd010010Container extends Component {
  render() {
    const { user, selectMemberList } = this.props.m8zd010010Store;
    return (
      <div>
        <h1>{user}</h1>
        <button onClick = { selectMemberList }>클릭</button>
      </div>
    );
  }
}

export default m8zd010010Container;