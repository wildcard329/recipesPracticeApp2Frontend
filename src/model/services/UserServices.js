import axios from 'axios';

const UserURL = new URL('http://localhost:5000/api/users')

class UserService {
    async getUserList() {
        const response = await axios.get(`${UserURL}/all`);
        return response.data;
    };
    async getUserData(id) {
        const response = await axios.get(`${UserURL}/${id}`);
        console.log('Data: ',response.data)
        return response.data;
    };
    async addNewUser(user) {
        await axios.post(`${UserURL}/create`, user)
    };
};

export default new UserService();
