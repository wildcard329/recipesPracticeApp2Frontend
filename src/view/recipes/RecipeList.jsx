import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList, selectUser, selectUserRecipeList } from '../../model/state/Selector.js';
import RecipeCard from './RecipeCard.jsx';
import UserHelper from '../../helpers/functions/validateUserId.js';

function RecipeList() {
    // const user = useSelector(selectUser);
    const recipes = useSelector(selectRecipeList);
    const userRecipes = useSelector(selectUserRecipeList);
    const history = useHistory();
    const user = UserHelper.validateId(useSelector(selectUser));
    
    useEffect(() => {
        RecipeController.getRecipeList();
        RecipeController.getUserRecipeList(user.id);
    }, []);

    const toAddRecipe = e => {
        e.preventDefault();
        history.push('/recipes/add');
    };

    return(
        <div>
            <div>
                <h2>Browse all recipes</h2>
                <RecipeCard recipes={recipes} />
            </div>
            <div>
                <h2>Your Recipes</h2>
                <RecipeCard recipes={userRecipes} />
            </div>
            <button onClick={toAddRecipe}>Add Recipe</button>
        </div>
    )
}

export default RecipeList;
