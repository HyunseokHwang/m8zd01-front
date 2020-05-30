import { observable, computed, toJS, action } from 'mobx';
import { autobind } from 'core-decorators';
import m8zd010010Repository from '../repository/m8zd010010repository';

@autobind
class m8zd010010Store {
  @observable
  _user = '현석';

  @computed
  get user(){
    return toJS(this._user);
  }

  @action
  selectMemberList() {
    const param = {};
    m8zd010010Repository.selectMemberList(param).then(action(
      (data) => {
        this._user = data.result;
      }
    ));
  }
}

export default new m8zd010010Store();