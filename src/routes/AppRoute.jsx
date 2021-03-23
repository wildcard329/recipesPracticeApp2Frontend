import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserList from '../view/users/UserList.jsx';
import UserInfo from '../view/users/UserInfo.jsx';
import EditUser from '../view/users/EditUser.jsx';
import CreateUser from '../view/users/CreateUser.jsx';

import SingleRecipeList from '../view/recipes/SingleRecipeList.jsx';
import MultiRecipeList from '../view/recipes/MultiRecipeList.jsx';
import RecipeInfo from '../view/recipes/RecipeInfo.jsx';
import RecipeForm from '../view/recipes/RecipeForm.jsx';
import PrivateRoute from './PrivateRoute.jsx';

import UserLogin from '../view/auth/UserLogin.jsx';
import UserRegister from '../view/auth/UserRegister.jsx';
import UserDashboard from '../view/users/UserDashboard.jsx';
import UserProfile from '../view/users/UserProfile.jsx';
import AppNavBar from './AppNavBar.jsx';

function AppRouter() {
    return(
        <div>
            <UserDashboard />
            {/* <AppNavBar /> */}
            <Switch>
                <Route exact path='/' component={UserLogin} />
                <Route path='/auth/login' component={UserLogin} />
                <Route path='/auth/register' component={UserRegister} />
                
                <PrivateRoute path='/user/profile' component={UserProfile} />
                
                <PrivateRoute path='/users/all' component={UserList} />
                <PrivateRoute path='/users/info' component={UserInfo} />
                <PrivateRoute path='/users/add' component={CreateUser} />
                <PrivateRoute path='/users/edit' component={EditUser} />

                <PrivateRoute path='/recipes/browse' component={MultiRecipeList} />
                <PrivateRoute path='/recipes/all' component={SingleRecipeList} />
                <PrivateRoute path='/recipes/user' component={SingleRecipeList} />
                <PrivateRoute path='/recipes/add' component={RecipeForm} />
                <PrivateRoute path='/recipe/:recipeId/info' component={RecipeInfo} />
                <PrivateRoute path='/recipe/:recipeId/edit' component={RecipeForm} />
            </Switch>
        </div>
    )
}

export default AppRouter;
