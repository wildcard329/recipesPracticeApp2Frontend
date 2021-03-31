import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

import { selectRecipeData, selectIngredientsData, selectInstructionsData, selectUser } from '../../model/state/Selector.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import StorageHandler from '../../helpers/functions/storageHandler.js';
import RecipeController from '../../controller/RecipeController.js';
import FormController from '../../controller/FormController.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const userId = UserHelper.getUserId();
    const history = useHistory();
    const data = recipe.image;
    const recipeId = recipe.id || StorageHandler.getRecipeId();

    // whenever the component loads, it needs recipe info
    useEffect(async () => {
        if (!recipe.id) {
            await RecipeController.getRecipeData(recipeId);
        } else {
            StorageHandler.setRecipeId(recipeId);
        }
    }, []);

    const clone = e => {
        e.preventDefault();
        console.log('cloned');
    }

    const toEditRecipe = async () => {
        history.push(`/recipe/${recipeId}/edit`);
    };

    const deleteRecipe = async () => {
        // await RecipeController.deleteRecipe(recipe.id)
        // StorageHandler.removeRecipeId();
        // history.push('/recipes/browse');
        FormController.requestDeleteRecipe(true);
    }

    return(
        <div className='single-recipe-card'>
            <Row>
                <Card.Title><h2>{recipe.name}</h2></Card.Title>
            </Row>
            <Row>
                <Card.Img className='recipe-data-image' src={`data:image/jpeg;base64,${data}`} />
                <Card.Text className='image-footer'>Posted by {recipe.author}</Card.Text>
            </Row>
            <Row>
                <Col >
                    <Card.Title>Ingredients:</Card.Title>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map(ingredient => {
                            return <li className='list-item'>{ingredient.name}</li>
                        })}
                    </ul>
                </Col>
                <Col xs={8}>
                    <Card.Title>Instructions:</Card.Title>
                    <ul>
                        {recipe.instructions && recipe.instructions.map(instruction => {
                            return <li className='list-item'>{instruction.name}</li>
                        })}
                    </ul>
                </Col>
            </Row>
            <div className='user-recipe-info'>
            {parseInt(userId) === parseInt(recipe.author) ?
                    <>
                    <Button onClick={toEditRecipe} variant='outline-success'><BsPencilSquare /></Button>
                    <Button onClick={deleteRecipe} variant='outline-danger'><BsFillTrashFill /></Button>
                    </>
                    :
                    <Button onClick={clone}>Add to Cookbook</Button>
                }
            </div>
        </div>
    )
}

export default RecipeInfo;
