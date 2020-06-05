import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TableView from '../view/TableView';
// import { autobind } from 'core-decorators';

// @autobind
@inject('m8zd010010Store')
@observer
class m8zd010010Container extends Component {
  render() {
    const { user, selectMemberList } = this.props.m8zd010010Store;
    return (
      <TableView
        user={user}
        selectMemberList={selectMemberList}
      />
    );
  }
}

export default m8zd010010Container;