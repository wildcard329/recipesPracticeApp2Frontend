import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';

function RecipeCard({recipe}) {
    const data = recipe.image
    const recipeId = recipe.id
    const history = useHistory();

    const getRecipeData = async e => {
        e.preventDefault();
        await RecipeController.getRecipeData(recipe.id);
        history.push(`/recipe/${recipeId}/info`);
    };

    return(
        <Card key={recipe.id} onClick={getRecipeData} className='recipe-card'>
            <Card.Img src={`data:image/jpeg;base64,${data}`} alt='recipe image' />
            <Card.Title className='recipe-name'>{recipe.name}</Card.Title>
        </Card>
    )
}

export default RecipeCard;
