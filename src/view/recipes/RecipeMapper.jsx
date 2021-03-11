import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RecipeCard from './RecipeCard.jsx';

function RecipeMapper({recipes}) {
    return(
        <div>
            <Row className='recipe-list'>
            {recipes && recipes.map(recipe => {
                return(
                    <Col>
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    </Col>
                )
            })}            
            </Row>
        </div>
    )
}

export default RecipeMapper;
