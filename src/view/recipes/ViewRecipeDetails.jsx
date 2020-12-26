import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipeController from '../../controller/RecipeController.js';

function ViewRecipeDetails({recipe}) {
    const history = useHistory();

    const getRecipeData = e => {
        e.preventDefault();
        console.log('recipe id: ',recipe.id)
        RecipeController.getRecipeData(recipe.id);
        history.push('/recipe/info');
    };

    return(
        <div key={recipe.id} onClick={getRecipeData}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>Posted by {recipe.author}</p>
        </div>
    )
}

export default ViewRecipeDetails;
