import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectRecipeData } from '../../model/state/Selector.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const history = useHistory();
    console.log('component data: ', recipe)

    const toRecipes = e => {
        e.preventDefault();
        history.push('/recipes/all');
    };

    return(
        <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>Posted by {recipe.author}</p>
            <button onClick={toRecipes}>Recipes</button>
        </div>
    )
}

export default RecipeInfo;
