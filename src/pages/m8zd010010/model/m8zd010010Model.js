import { extendObservable } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class m8zd010010Model {
    constructor(response = {}) {
        extendObservable(this, response);
    }

    static selectMemberList(response) {

        return response && response;
    }
}

export default m8zd010010Model;