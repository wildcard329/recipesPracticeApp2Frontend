import React from 'react';
import ViewRecipeDetails from './ViewRecipeDetails.jsx';

function RecipeCard({recipes}) {
    return(
        <div className='recipe-list'>
            {recipes && recipes.map(recipe => {
                return(
                    <ViewRecipeDetails recipe={recipe} />
                )
            })}
        </div>
    )
}

export default RecipeCard;
