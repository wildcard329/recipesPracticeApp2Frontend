import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { selectRecipeData, selectIngredientsData, selectInstructionsData, selectUser } from '../../model/state/Selector.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import RecipeController from '../../controller/RecipeController.js';
import StorageHandler from '../../helpers/functions/storageHandler.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const ingredients = useSelector(selectIngredientsData);
    const instructions = useSelector(selectInstructionsData);
    const userId = UserHelper.getUserId();
    const history = useHistory();
    const data = recipe.image;
    const recipeId = recipe.id || StorageHandler.getRecipeId();

    // whenever the component loads, it needs recipe info
    useEffect(async () => {
        if (!recipe.id) {
            await RecipeController.getRecipeData(recipeId);
            await RecipeController.getRecipeIngredients(recipeId);
            await RecipeController.getRecipeInstructions(recipeId);
        } else {
            StorageHandler.setRecipeId(recipeId);
        }
    }, []);

    const toRecipes = e => {
        e.preventDefault();
        StorageHandler.removeRecipeId();
        history.push('/recipes/browse');
    };

    const toEditRecipe = async () => {
        history.push(`/recipe/${recipeId}/edit`);
    };

    const deleteRecipe = async () => {
        await RecipeController.deleteRecipe(recipe.id)
        StorageHandler.removeRecipeId();
        history.push('/recipes/browse');
    }

    return(
        <div className='single-recipe-card'>
            <Row>
                <Col>
                    <Row>
                        <Card.Img src={`data:image/jpeg;base64,${data}`} />
                    </Row>
                    <Row className='image-footer'>
                        <Card.Text>Posted by {recipe.author}</Card.Text>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Card.Title><h2>{recipe.name}</h2></Card.Title>
                    </Row> 
                    <Row className='card-section'>
                        <Card.Text>{recipe.description}</Card.Text>    
                    </Row>
                    <Row className='card-section'>
                        <ul>
                            {ingredients && ingredients.map(ingredient => {
                                return <li className='list-item'>{ingredient.name}</li>
                            })}    
                        </ul>    
                    </Row>
                    <Row className='card-section'>
                        <ol>
                            {instructions && instructions.map(instruction => {
                                return <li className='list-item'>{instruction.name}</li>
                            })}  
                        </ol>    
                    </Row>           
                </Col>
            </Row>
            <Button onClick={toRecipes}>Browse</Button>
            {parseInt(userId) === parseInt(recipe.author) ? 
                <div className='user-recipe-info'>
                    <Button className='btn btn-success' onClick={toEditRecipe}>Edit</Button> 
                    <Button className='btn btn-danger' onClick={deleteRecipe}>Delete</Button>
                </div> 
            : null}
        </div>
    )
}

export default RecipeInfo;
