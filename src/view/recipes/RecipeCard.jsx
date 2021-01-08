import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import ViewRecipeDetails from './ViewRecipeDetails.jsx';

function RecipeCard({recipes}) {
    return(
        <div className='recipe-list'>
            <Breadcrumb>
            {recipes && recipes.map(recipe => {
                return(
                    <Breadcrumb.Item>
                        <ViewRecipeDetails recipe={recipe} />
                    </Breadcrumb.Item>
                )
            })}            
            </Breadcrumb>
        </div>
    )
}

export default RecipeCard;
