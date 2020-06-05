import axios from 'axios';
import { autobind } from 'core-decorators';
import m8zd010010Model from '../model/m8zd010010Model';

@autobind
class m8zd010010Repository {

    static selectMemberList(param) {
        return axios.post('/selectMemberList.do', param)
            .then(
                (response) => {
                    console.log(response);
                    return (response && response.data) && m8zd010010Model.selectMemberList(response.data);
                }
            )
            .catch(error => { return '1' });
    }
}

export default m8zd010010Repository;
