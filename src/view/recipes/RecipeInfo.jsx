import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { selectRecipeData, selectUser } from '../../model/state/Selector.js';
import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const user = useSelector(selectUser);
    const data = recipe.image;
    const ingredients = recipe.ingredients.split(',');
    const instructions = recipe.instructions.split('.,')

    console.log('user is author: ',user.id === recipe.author)
    console.log('user id: ',typeof(user.id),'\nrecipe author: ',typeof(recipe.author))
    const toRecipes = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
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
                                return <li className='list-item'>{ingredient}</li>
                            })}    
                        </ul>    
                    </Row>
                    <Row className='card-section'>
                        <ul>
                            {instructions && instructions.map(instruction => {
                                return <li className='list-item'>{instruction}</li>
                            })}  
                        </ul>    
                    </Row>           
                </Col>
            </Row>
            <Button onClick={toRecipes}>Browse</Button>
            {user.id === parseInt(recipe.author) ? <Button onClick={deleteRecipe}>Delete</Button> : null}
        </div>
    )
}

export default RecipeInfo;
