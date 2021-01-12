import React from 'react';
import { useSelector } from 'react-redux';

import { selectRecipeData } from '../../model/state/Selector.js';
import UserController from '../../controller/UserController.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const data = recipe.image;

    const toRecipes = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
    };

    return(
        <div className='single-recipe-card'>
            <h2>{recipe.name}</h2>
            <img src={`data:image/jpeg;base64,${data}`} /> 
            <p>{recipe.description}</p>
            <p>Posted by {recipe.author}</p>
            <button onClick={toRecipes}>Recipes</button>
        </div>
    )
}

export default RecipeInfo;
