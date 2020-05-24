import axios from 'axios';

class m8zd010010Repository {
    static selectMemberList(param) {
        return axios.post('/selectMemberList.do', param)
            .then(
                (response) => {
                    console.log(response);
                    return response.data;
                }
            )
            .catch(error => { return '1' });
    }
}

export default m8zd010010Repository;
