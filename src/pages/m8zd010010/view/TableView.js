import React, { Fragment, Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Button, Icon, Message } from 'semantic-ui-react';

@autobind
@observer
class TableView extends Component {

    render() {
        const { user, selectMemberList } = this.props;

        return (
            <Fragment>
                <Message>
                    <Message.Header>{user}</Message.Header>
                </Message>
                <Button color='green' onClick={selectMemberList}>클릭</Button>
            </Fragment>
        );
    }
}

export default TableView;
