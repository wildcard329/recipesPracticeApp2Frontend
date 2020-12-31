import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList } from '../../model/state/Selector.js';
import RecipeCard from './RecipeCard.jsx';

function RecipeList() {
    const recipes = useSelector(selectRecipeList);
    const history = useHistory();
    console.log('recipes: ',recipes)

    useEffect(() => {
        RecipeController.getRecipeList();
    }, []);

    const toAddRecipe = e => {
        e.preventDefault();
        history.push('/recipes/add');
    };

    return(
        <div>
            <h2>Browse all recipes</h2>
            <RecipeCard recipes={recipes} />
            <button onClick={toAddRecipe}>Add Recipe</button>
        </div>
    )
}

export default RecipeList;
