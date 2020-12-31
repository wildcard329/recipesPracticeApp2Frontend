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
        const userObject = await UserService.loginUser(user);
        store.dispatch(Action.setUser(userObject))
    };
    async logoutUser(user) {
        await UserService.logoutUser();
        store.dispatch(Action.removeUser(user));
    };
};

export default new UserController();
