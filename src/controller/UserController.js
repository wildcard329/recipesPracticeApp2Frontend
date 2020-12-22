import store from '../store.js';
import * as Action from '../model/state/user/UserAction.js';
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
};

export default new UserController();
