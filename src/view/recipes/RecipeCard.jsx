import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import ViewRecipeDetails from './ViewRecipeDetails.jsx';

function RecipeCard({recipes}) {
    return(
        <div>
            <Breadcrumb className='recipe-list'>
            {recipes && recipes.map(recipe => {
                return(
                    <Breadcrumb.Item>
                        <ViewRecipeDetails key={recipe.id} recipe={recipe} />
                    </Breadcrumb.Item>
                )
            })}            
            </Breadcrumb>
        </div>
    )
}

export default RecipeCard;
