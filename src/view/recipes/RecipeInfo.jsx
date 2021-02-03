import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { selectRecipeData, selectIngredientsData, selectInstructionsData, selectUser } from '../../model/state/Selector.js';
import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const ingredients = useSelector(selectIngredientsData);
    const instructions = useSelector(selectInstructionsData);
    const user = useSelector(selectUser);
    const history = useHistory();
    const data = recipe.image;
    const recipeId = recipe.id;

    const toRecipes = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
    };

    const toEditRecipe = async () => {
        history.push(`/recipe/${recipeId}/edit`);
    };

    const deleteRecipe = async () => {
        await RecipeController.deleteRecipe(recipe.id)
        UserController.routeToDestination('browse');
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
                        <ul>
                            {instructions && instructions.map(instruction => {
                                return <li className='list-item'>{instruction.name}</li>
                            })}  
                        </ul>    
                    </Row>           
                </Col>
            </Row>
            <Button onClick={toRecipes}>Browse</Button>
            {user.id === parseInt(recipe.author) ? 
                <div className='user-recipe-info'>
                    <Button className='btn btn-success' onClick={toEditRecipe}>Edit</Button> 
                    <Button className='btn btn-danger' onClick={deleteRecipe}>Delete</Button>
                </div> 
            : null}
        </div>
    )
}

export default RecipeInfo;
