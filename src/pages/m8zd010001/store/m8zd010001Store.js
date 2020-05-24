import { observable, computed, toJS, action } from 'mobx';
import { autobind } from 'core-decorators';
import m8zd010001Repository from '../repository/m8zd010001Repository';

@autobind
class m8zd010001Store {
  @observable 
  _user='현석';

  @computed
  get user(){
    return toJS(this._user);
  }

  @action
  selectMemberList() {
    const param = {};
    m8zd010001Repository.selectMemberList(param).then(action(
      (data) => {
        this._user = data.result;
      }
    ));
  }
}

export default m8zd010001Store