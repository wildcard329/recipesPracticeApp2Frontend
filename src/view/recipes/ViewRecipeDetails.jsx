import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipeController from '../../controller/RecipeController.js';
import notAvailable from '../images_static/na.jpeg';

function ViewRecipeDetails({recipe}) {
    const history = useHistory();

    const getRecipeData = e => {
        e.preventDefault();
        RecipeController.getRecipeData(recipe.id);
        history.push('/recipe/info');
    };

    return(
        <div key={recipe.id} onClick={getRecipeData} className='recipe-card'>
            <img src={notAvailable} alt='image not available' />
            <h2>{recipe.name}</h2>
        </div>
    )
}

export default ViewRecipeDetails;
