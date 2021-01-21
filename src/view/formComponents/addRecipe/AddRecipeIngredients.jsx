import React from 'react';

function AddRecipeIngredients({ingredient, ingredientIsEntered}) {
    return(
        <p className={ingredientIsEntered ? 'create-recipe-item' : 'none'}>{ingredient}</p>
    )
}

export default AddRecipeIngredients;
