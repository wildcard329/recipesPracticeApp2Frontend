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

function AppRouter() {
    return(
        <div>
            <Switch>
                <Route path='/users/all' component={UserList} />
                <Route path='/users/info' component={UserInfo} />
                <Route path='/users/add' component={CreateUser} />
                <Route path='/users/edit' component={EditUser} />

                <Route path='/recipes/all' component={RecipeList} />
                <Route path='/recipe/info' component={RecipeInfo} />
                <Route path='/recipes/add' component={CreateRecipe} />
                <Route path='/recipe/edit' component={EditRecipe} />
            </Switch>
        </div>
    )
}

export default AppRouter;
