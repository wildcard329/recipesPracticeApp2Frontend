import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';

function ViewRecipeDetails({recipe}) {
    const data = recipe.image
    const recipeId = recipe.id
    const history = useHistory();

    const getRecipeData = async e => {
        e.preventDefault();
        await RecipeController.getRecipeData(recipe.id);
        await RecipeController.getRecipeIngredients(recipe.id);
        await RecipeController.getRecipeInstructions(recipe.id);
        history.push(`/recipe/${recipeId}/info`);
        // UserController.routeToDestination('recipe info', recipeId);
    };

    return(
        <Card key={recipe.id} onClick={getRecipeData} className='recipe-card'>
            <Card.Img src={`data:image/jpeg;base64,${data}`} alt='recipe image' />
            <Card.Title>{recipe.name}</Card.Title>
        </Card>
    )
}

export default ViewRecipeDetails;
