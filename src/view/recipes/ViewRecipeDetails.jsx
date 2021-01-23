import React from 'react';
import { Card } from 'react-bootstrap';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';

function ViewRecipeDetails({recipe}) {
    const data = recipe.image

    const getRecipeData = async e => {
        e.preventDefault();
        await RecipeController.getRecipeData(recipe.id);
        UserController.routeToDestination('recipe info');
    };

    return(
        <Card key={recipe.id} onClick={getRecipeData} className='recipe-card'>
            <Card.Img src={`data:image/jpeg;base64,${data}`} alt='recipe image' />
            <Card.Title>{recipe.name}</Card.Title>
        </Card>
    )
}

export default ViewRecipeDetails;
