import React from 'react';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';
import notAvailable from '../images_static/na.jpeg';

function ViewRecipeDetails({recipe}) {

    const getRecipeData = e => {
        e.preventDefault();
        RecipeController.getRecipeData(recipe.id);
        UserController.routeToDestination('recipe info');
    };

    return(
        <div key={recipe.id} onClick={getRecipeData} className='recipe-card'>
            <img src={notAvailable} alt='image not available' />
            <h2>{recipe.name}</h2>
        </div>
    )
}

export default ViewRecipeDetails;
