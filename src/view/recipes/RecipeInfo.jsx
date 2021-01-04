import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectRecipeData } from '../../model/state/Selector.js';
import notAvailable from '../images_static/na.jpeg';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const history = useHistory();

    const toRecipes = e => {
        e.preventDefault();
        history.push('/recipes/browse');
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
