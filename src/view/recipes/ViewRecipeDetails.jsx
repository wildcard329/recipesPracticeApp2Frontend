import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectRecipeData } from '../../model/state/recipe/RecipeSelector';

function ViewRecipeDetails() {
    const recipe = useSelector(selectRecipeData);
    const history = useHistory();

    const toRecipes = e => {
        history.push('/recipes/all')
    }

    return(
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <p>Posted by {recipe.author}</p>
            <button onClick={toRecipes}>Recipes</button>
        </div>
    )
}

export default ViewRecipeDetails;
