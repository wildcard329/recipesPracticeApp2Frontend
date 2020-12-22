import React from 'react';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController';

function RecipeInfo({recipe}) {
    const history = useHistory();

    const getRecipeData = e => {
        e.preventDefault();
        RecipeController.getRecipeData(recipe.id);
        history.push('/recipe/info');
    };

    return(
        <div onClick={getRecipeData}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>Posted by {recipe.author}</p>
        </div>
    )
}

export default RecipeInfo;
