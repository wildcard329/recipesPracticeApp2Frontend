import React from 'react';
import { useSelector } from 'react-redux';

import { selectRecipeData } from '../../model/state/Selector.js';
import notAvailable from '../images_static/na.jpeg';
import UserController from '../../controller/UserController.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);

    const toRecipes = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
    };

    return(
        <div className='single-recipe-card'>
            <h2>{recipe.name}</h2>
            <img src={notAvailable} alt='image not available' />
            <p>{recipe.description}</p>
            <p>Posted by {recipe.author}</p>
            <button onClick={toRecipes}>Recipes</button>
        </div>
    )
}

export default RecipeInfo;
