import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import RecipeCard from './RecipeCard.jsx';
import RecipeController from '../../controller/RecipeController.js';
import { selectRecipeList } from '../../model/state/Selector.js';

function RecipeList() {
    const recipes = useSelector(selectRecipeList);

    useEffect(() => {
        RecipeController.getRecipeList();
    }, [recipes]);
    
    return(
        <div>
            <RecipeCard recipes={recipes} />
        </div>
    )
}

export default RecipeList;
