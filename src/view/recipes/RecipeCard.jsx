import React from 'react';
import RecipeInfo from './ViewRecipeDetails';

function RecipeCard({recipes}) {
    console.log('Card', recipes)
    return(
        <div>
            {recipes && recipes.map(recipe => {
                return(<RecipeInfo recipe={recipe} />)
            })}
        </div>
    )
}

export default RecipeCard;
