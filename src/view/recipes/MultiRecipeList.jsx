import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList, selectUser, selectUserRecipeList } from '../../model/state/Selector.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import RecipeCard from './RecipeCard.jsx';
import UserController from "../../controller/UserController.js";

function RecipeList() {
    const recipes = useSelector(selectRecipeList);
    const userRecipes = useSelector(selectUserRecipeList);
    const user = UserHelper.validateId(useSelector(selectUser));
    
    const setUserRecipes = () => {
        UserController.getUserData(user);
    };

    useEffect(() => {
        RecipeController.getRecipeList();
        RecipeController.getUserRecipeList(user.id);
    }, [user.id]);

    return(
        <div>
            <div className='recipe-lists'>
                <Link to='/recipes/all' className='list-header'>
                    <h2 className='list-header'>Browse all recipes</h2>
                </Link>
                <RecipeCard recipes={recipes} />
            </div>
            <div className='recipe-lists' onClick={setUserRecipes}>
                <Link to='/recipes/user' className='list-header'>
                    <h2 className='list-header'>Your Recipes</h2>
                </Link>
                <RecipeCard recipes={userRecipes} />
            </div>
        </div>
    )
}

export default RecipeList;
