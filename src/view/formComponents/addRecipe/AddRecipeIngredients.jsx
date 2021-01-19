import React from 'react';

function AddRecipeIngredients({ingredient, ingredientIsEntered}) {
    return(
        <p className={ingredientIsEntered ? '' : 'none'}>{ingredient}</p>
    )
}

export default AddRecipeIngredients;
