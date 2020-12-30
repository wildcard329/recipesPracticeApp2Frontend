import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserList from '../view/users/UserList.jsx';
import UserInfo from '../view/users/UserInfo.jsx';
import EditUser from '../view/users/EditUser.jsx';
import CreateUser from '../view/users/CreateUser.jsx';

import RecipeList from '../view/recipes/RecipeList.jsx';
import RecipeInfo from '../view/recipes/RecipeInfo.jsx';
import EditRecipe from '../view/recipes/EditRecipe.jsx';
import CreateRecipe from '../view/recipes/CreateRecipe.jsx';
import PrivateRoute from './PrivateRoute.jsx';

import Testimageupload from '../view/testimageupload.jsx';
import UserLogin from '../view/auth/UserLogin.jsx';
import UserRegister from '../view/auth/UserRegister.jsx';

function AppRouter() {
    return(
        <div>
            <Switch>
                <Route path='/auth/login' component={UserLogin} />
                <Route path='/auth/register' component={UserRegister} />
                <PrivateRoute path='/users/all' component={UserList} />
                <PrivateRoute path='/users/info' component={UserInfo} />
                <PrivateRoute path='/users/add' component={CreateUser} />
                <PrivateRoute path='/users/edit' component={EditUser} />

                <PrivateRoute path='/recipes/all' component={RecipeList} />
                <PrivateRoute path='/recipe/info' component={RecipeInfo} />
                <PrivateRoute path='/recipes/add' component={CreateRecipe} />
                <PrivateRoute path='/recipe/edit' component={EditRecipe} />
            
                <Route path='/image_upload' component={Testimageupload} />
            </Switch>
        </div>
    )
}

export default AppRouter;
