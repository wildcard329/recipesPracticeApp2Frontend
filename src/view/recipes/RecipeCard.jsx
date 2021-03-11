import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ViewRecipeDetails from './ViewRecipeDetails.jsx';

function RecipeCard({recipes}) {
    return(
        <div>
            <Row className='recipe-list'>
            {recipes && recipes.map(recipe => {
                return(
                    <Col>
                        <ViewRecipeDetails key={recipe.id} recipe={recipe} />
                    </Col>
                )
            })}            
            </Row>
        </div>
    )
}

export default RecipeCard;
