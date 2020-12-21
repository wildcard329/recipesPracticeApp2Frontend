import axios from 'axios';

const UserURL = new URL('http://localhost:5000/api/users')

class UserService {
    async getUserList() {
        const response = await axios.get(`${UserURL}/all`);
        return response.data;
    };
    async getUserData(id) {
        const response = await axios.get(`${UserURL}/${id}`);
        return response.data;
    };
};

export default new UserService();
