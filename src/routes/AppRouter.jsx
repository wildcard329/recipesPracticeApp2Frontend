import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserList from '../view/users/UserList.jsx';
import UserInfo from '../view/users/UserInfo.jsx';
import EditUser from '../view/users/EditUser.jsx';
import CreateUser from '../view/users/CreateUser.jsx';

function AppRouter() {
    return(
        <div>
            <Switch>
                <Route path='/users/all' component={UserList} />
                <Route path='/users/info' component={UserInfo} />
                <Route path='/users/edit' component={CreateUser} />
                <Route path='/users/edit' component={EditUser} />
            </Switch>
        </div>
    )
}

export default AppRouter;
