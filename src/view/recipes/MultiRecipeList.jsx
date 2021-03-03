import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList, selectUser, selectUserRecipeList } from '../../model/state/Selector.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import RecipeCard from './RecipeCard.jsx';
import UserController from "../../controller/UserController.js";

function RecipeList() {
    const history = useHistory();
    const recipes = useSelector(selectRecipeList);
    const userRecipes = useSelector(selectUserRecipeList);
    const userId = UserHelper.getUserId();
    
    const setUserRecipes = () => {
        UserController.getUserData(userId);
    };

    const toAllRecipes = () => {
        history.push('/recipes/all');
    }

    const toRecipeList = () => {
        history.push('/recipes/user');
    }

    useEffect(() => {
        RecipeController.getRecipeList();
        RecipeController.getUserRecipeList(userId);
    }, [userId]);

    return(
        <div>
            <div className='recipe-lists'>
                <h2 className='list-header' onClick={toAllRecipes}>Browse all recipes</h2>
                <RecipeCard recipes={recipes} />
            </div>
            <div className='recipe-lists' onClick={setUserRecipes}>
                <h2 className='list-header' onClick={toRecipeList}>Your Recipes</h2>
                <RecipeCard recipes={userRecipes} />
            </div>
        </div>
    )
}

export default RecipeList;
