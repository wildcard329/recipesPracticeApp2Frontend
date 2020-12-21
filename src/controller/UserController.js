import store from '../store.js';
import * as Action from '../model/state/UserAction.js';
import UserService from '../model/services/UserServices.js';

class UserController{
    async getUserList(){
        const userList = await UserService.getUserList();
        store.dispatch(Action.getUserList(userList));
    }
}

export default new UserController();
