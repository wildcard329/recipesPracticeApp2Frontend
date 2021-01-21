import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Card, CardImg, Row, Col } from 'react-bootstrap';

import AddRecipeName from '../formComponents/addRecipe/AddRecipeName.jsx';
import AddRecipeDescription from '../formComponents/addRecipe/AddRecipeDescription.jsx';
import CreateRecipeIngredients from './CreateRecipeIngredients.jsx';
import CreateRecipeInstructions from './CreateRecipeInstructions.jsx';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';
import { selectUser } from '../../model/state/Selector.js';
import imageDefault from '../../images_static/plate-utensils.jpeg';
import ArrayHelper from '../../helpers/functions/intToArrayHandler.js';
import AddRecipeIngredients from '../formComponents/addRecipe/AddRecipeIngredients.jsx';
import AddRecipeInstructions from '../formComponents/addRecipe/AddRecipeInstructions.jsx';

function CreateRecipe() {
    const user = useSelector(selectUser);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [imgPreview, setImgPreview] = useState('');
    const [nameIsEntered, setNameIsEntered] = useState(false);
    const [descriptionIsEntered, setDescriptionIsEntered] = useState(false);
    const [numRecipeIngredients, setNumRecipeIngredients] = useState(5);
    const [numRecipeInstructions, setNumRecipeInstructions] = useState(3);
    const [completed, setCompleted] = useState();
    const [data, setData] = useState({
        name: null,
        description: null,
        author: user.id
    })
    const recipeIngredientsArr = ArrayHelper.convertIntToArr('ingredient',numRecipeIngredients);
    const recipeInstructionsArr = ArrayHelper.convertIntToArr('instruction',numRecipeInstructions);

    useEffect(() => {
        recipeIngredientsArr.map(ingredientId => {
            setCompleted({...completed, [ingredientId]: false});
        });
        recipeInstructionsArr.map(instructionId => {
            setCompleted({...completed, [instructionId]: false})
        });
        console.log(completed)
    }, []);
    
    const incrementRecipeIngredientsArr = () => {
        setNumRecipeIngredients(numRecipeIngredients+1);
    };
    const incrementRecipeInstructionsArr = () => {
        setNumRecipeInstructions(numRecipeInstructions+1);
    };

    const handleImage = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            setImgPreview(reader.result);
        })
        reader.readAsDataURL(e.target.files[0])
    };
    
    const handleRecipe = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const signalListItemComplete = e => {
        setCompleted({...completed, [e.target.name]: true});
    };

    const signalListItemEdit = e => {
        setCompleted({...completed, [e.target.name]: false});
    };

    const passNameProps = () => {
        setNameIsEntered(true);
    };

    const passDescriptionProps = () => {
        setDescriptionIsEntered(true);
        console.log(completed);
    };

    const editNameField = () => {
        setNameIsEntered(false);
        console.log(completed)
    };

    const editDescriptionField = () => {
        setDescriptionIsEntered(false);
    };
    
    const cancel = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
    };
    
    const submitRecipe = async e => {
        e.preventDefault();
        const recipe = new FormData();
        recipe.append('name', data.name);
        recipe.append('description', data.description);
        recipe.append('author',data.author);
        recipe.append('file', file);
        recipe.append('filename', filename);
        await RecipeController.addRecipeData(recipe);
        await RecipeController.getRecipeList();
        await RecipeController.getUserRecipeList(user.id);
        UserController.routeToDestination('browse');
    };
    return(
        <div className='create-recipe'>
            <h2>Add New Recipe</h2>
            <form onSubmit={submitRecipe}>
                <Form>
                    <Row className='form-row'>
                        {imgPreview ? 
                            <Form.Group as={Col}>
                                <Row>
                                    <Card.Img src={imgPreview} /> 
                                </Row>
                                <Row>
                                    <input type='file' onChange={handleImage} className='image-input' />
                                </Row>
                            </Form.Group>
                        : 
                        <Form.Group as={Col}>
                            <Row>
                                <h4>Select Image to Upload</h4>
                                <CardImg src={imageDefault} />
                            </Row>
                            <Row>
                                <input type='file' onChange={handleImage} className='image-input' />
                            </Row>
                        </Form.Group>}
                        <Form.Group controlId='name' as={Col}>
                            <Row onClick={editNameField} className='input-field'>
                                <input id='name' placeholder='recipe name' type='text' name='name' onChange={handleRecipe} onBlur={passNameProps} className={nameIsEntered ? 'none' : ''} />
                                <AddRecipeName name={data.name} nameIsEntered={nameIsEntered} />
                            </Row>
                            <Row onClick={editDescriptionField} className='input-field'>
                                <textarea id='description' placeholder='description' type='text' name='description' onChange={handleRecipe} onBlur={passDescriptionProps} className={descriptionIsEntered ? 'none' : ''} />    
                                <AddRecipeDescription description={data.description} descriptionIsEntered={descriptionIsEntered} />
                            </Row>
                            <Row className='input-field'>
                                <ul>
                                {recipeIngredientsArr && recipeIngredientsArr.map(ingredientId => {
                                    return (
                                        <li onClick={signalListItemEdit}>
                                            <AddRecipeIngredients />
                                            <input onChange={handleRecipe} name={ingredientId} type='text' placeholder='ingredient' onBlur={signalListItemComplete} className= 'create-recipe-item' />
                                        </li>)
                                })}
                                </ul>
                                <Button xs={2} className='btn btn-primary' onClick={incrementRecipeIngredientsArr}>More Ingredients</Button>
                            </Row>
                            <Row className='input-field'>
                                <ul>
                                    {recipeInstructionsArr && recipeInstructionsArr.map(instructionId => {
                                        return(
                                            <li onClick={signalListItemEdit}>
                                                <AddRecipeInstructions />
                                                <textarea onChange={handleRecipe} name={instructionId} type='text' placeholder='instruction' onBlur={signalListItemComplete} className='create-recipe-item' />
                                            </li>
                                        )
                                    })}
                                </ul>
                                <Button xs={2} className='btn btn-primary' onClick={incrementRecipeInstructionsArr}>More Instructions</Button>
                                {/* <CreateRecipeInstructions /> */}
                            </Row>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Row} className='recipe-btn-group'>
                        <Button xs={2} className='btn btn-secondary' onClick={cancel}>Cancel</Button>
                        <Button xs={2} className='btn btn-primary' onClick={submitRecipe}>Submit</Button>
                    </Form.Group>
                </Form>
            </form>
        </div>
    )
}

export default CreateRecipe;
