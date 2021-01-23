import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { selectRecipeData } from '../../model/state/Selector.js';
import UserController from '../../controller/UserController.js';

function RecipeInfo() {
    const recipe = useSelector(selectRecipeData);
    const data = recipe.image;
    const ingredients = recipe.ingredients.split(',');
    const instructions = recipe.instructions.split('.,')

    const toRecipes = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
    };

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
        </div>
    )
}

export default RecipeInfo;
