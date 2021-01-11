import React from 'react';
import { Card } from 'react-bootstrap';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';
import notAvailable from '../images_static/na.jpeg';

function ViewRecipeDetails({recipe}) {
    const data = recipe.image

    const getRecipeData = e => {
        e.preventDefault();
        RecipeController.getRecipeData(recipe.id);
        UserController.routeToDestination('recipe info');
    };

    return(
        <Card key={recipe.id} onClick={getRecipeData} className='recipe-card'>
            {
                data ? 
                <Card.Img src={`data:image/jpeg;base64,${data}`} alt='recipe image' />
                :
                <Card.Img src={notAvailable} alt='image not available' />
            }
            <Card.Title>{recipe.name}</Card.Title>
        </Card>
    )
}

export default ViewRecipeDetails;
