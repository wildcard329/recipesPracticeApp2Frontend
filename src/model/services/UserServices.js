import axios from 'axios';
import axiosWithAuth from '../../helpers/utils/axiosWithAuth.js';

const UserURL = new URL('http://localhost:5000/api/users')
const AuthURL = new URL('http://localhost:5000/api/auth')

class UserService {
    async getUserList() {
        const response = await axios.get(`${UserURL}/all`);
        console.log('u service: ', response.data)
        return response.data;
    };
    async getUserData(id) {
        const response = await axios.get(`${UserURL}/${id}`);
        return response.data;
    };
    async addNewUser(user) {
        await axios.post(`${UserURL}/create`, user)
    };
    async registerNewUser(user) {
        await axios.post(`${AuthURL}/register`, user);
    };
    async loginUser(user) {
        await axios.post(`${AuthURL}/login`, user)
    };
};

export default new UserService();
