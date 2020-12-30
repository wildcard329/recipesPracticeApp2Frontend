import store from '../store.js';
import * as Action from '../model/state/Action.js';
import UserService from '../model/services/UserServices.js';

class UserController{
    async getUserList(){
        const userList = await UserService.getUserList();
        store.dispatch(Action.getUserList(userList));
    };
    async getUserData(id){
        const userData = await UserService.getUserData(id);
        store.dispatch(Action.getUserData(userData));
    };
    async addNewUser(user){
        await UserService.addNewUser(user);
    };
    async registerNewUser(user) {
        await UserService.registerNewUser(user);
    };
    async loginUser(user) {
        const token = await UserService.loginUser(user);
        console.log('token: ',token)
        store.dispatch(Action.authenticateUser(token))
    };
};

export default new UserController();
