import axios from 'axios';
import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

const UserURL = new URL('http://localhost:5000/api/users')
const AuthURL = new URL('http://localhost:5000/api/auth')

class UserService {
    async getUserList() {
        const response = await axiosWithAuth().get(`${UserURL}/all`);
        return response.data;
    };
    async getUserData(id) {
        const response = await axiosWithAuth().get(`${UserURL}/${id}`);
        return response.data;
    };
    async addNewUser(user) {
        await axiosWithAuth().post(`${UserURL}/create`, user)
    };
    async registerNewUser(user) {
        await axios.post(`${AuthURL}/register`, user);
    };
    async loginUser(user) {
        const response = await axios.post(`${AuthURL}/login`, user)
        localStorage.setItem('token', response.data.token)
        return response.data.user;
    };
};

export default new UserService();
