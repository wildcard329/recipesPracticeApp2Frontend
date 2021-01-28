import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Card, CardImg, Row, Col } from 'react-bootstrap';

import AddRecipeName from '../formComponents/addRecipe/AddRecipeName.jsx';
import AddRecipeDescription from '../formComponents/addRecipe/AddRecipeDescription.jsx';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';
import { selectUser, selectEditRecipeData } from '../../model/state/Selector.js';
import imageDefault from '../../images_static/plate-utensils.jpeg';
import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import RecipeFormIngredients from './RecipeFormIngredients.jsx';
import RecipeFormInstructions from './RecipeFormInstructions.jsx';

function RecipeForm() {
    const user = useSelector(selectUser);
    const recipeData = useSelector(selectEditRecipeData);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [imgPreview, setImgPreview] = useState('');
    const [nameIsEntered, setNameIsEntered] = useState(false);
    const [descriptionIsEntered, setDescriptionIsEntered] = useState(false);
    const [numRecipeIngredients, setNumRecipeIngredients] = useState(5);
    const [numRecipeInstructions, setNumRecipeInstructions] = useState(3);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [data, setData] = useState({
        name: recipeData ? recipeData.name : null,
        description: recipeData ? recipeData.description : null,
        author: user.id
    })

    const [recipeIngredientsArr, setRecipeIngredientsArr] = useState(FormHelper.convertIntToArr(recipeData ? recipeData.ingredients.split(',') : Array(numRecipeIngredients).fill(null), numRecipeIngredients));
    const recipeInstructionsArr = FormHelper.convertIntToArr(recipeData ? recipeData.instructions.split('.,') : Array(numRecipeInstructions).fill(null), numRecipeInstructions);

    // useEffect(() => {
    //     if (ingredientAdd !== ''){
    //         setIngredients([...ingredients, ingredientAdd])
    //         console.log('ingredients: ',ingredients)
    //         FormController.addRecipeIngredient('');
    //     } else if (ingredientRemove !== '') {
    //         const filteredIngredients = FormHelper.filterListItem(ingredientRemove, recipeIngredientsArr)
    //         setIngredients(filteredIngredients);
    //         FormController.removeRecipeIngredient('');
    //     } else if (ingredientIdRemove !== null) {
    //         // const filteredIngredients = FormHelper.removeListItem(ingredientIdRemove, recipeIngredientsArr);
    //         // setIngredients(filteredIngredients);
    //         console.log('ingredients: ',recipeIngredientsArr,'id: ',ingredientIdRemove)
    //         setNumRecipeIngredients(recipeIngredientsArr.length);
    //         FormController.removeRecipeIngredientId(null);
    //     } else if (instructionAdd !== '') {
    //         setInstructions([...instructions, instructionAdd])
    //         FormController.addRecipeInstruction('');
    //     } else if (instructionRemove !== '') {
    //         const filteredInstructions = FormHelper.filterListItem(instructionRemove, instructions)
    //         setInstructions(filteredInstructions)
    //         FormController.removeRecipeInstruction('');
    //     } else if (instructionIdRemove !== null) {
    //         FormController.removeRecipeInstructionId(null);
    //     }
    // }, [ingredientAdd, ingredientRemove, ingredientIdRemove, instructionAdd, instructionRemove, instructionIdRemove])

    const incrementRecipeIngredientsArr = () => {
        // setNumRecipeIngredients(numRecipeIngredients+1);
        setRecipeIngredientsArr(FormHelper.convertIntToArr(recipeIngredientsArr, recipeIngredientsArr.length+1))
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

    const passNameProps = () => {
        setNameIsEntered(true);
    };

    const passDescriptionProps = () => {
        setDescriptionIsEntered(true);
    };

    const editNameField = () => {
        setNameIsEntered(false);
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
        recipe.append('ingredients', ingredients);
        recipe.append('instructions', instructions);
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
                                {recipeData ? null : <h4>Select Image to Upload</h4>}
                                <CardImg src={recipeData ? `data:image/jpeg;base64,${recipeData.image}` : imageDefault} />
                            </Row>
                            <Row>
                                <input type='file' onChange={handleImage} className='image-input' />
                            </Row>
                        </Form.Group>}
                        <Form.Group controlId='name' as={Col}>
                            <Row onClick={editNameField} className='input-field'>
                                <input id='name' placeholder={recipeData ? recipeData.name : 'recipe name'} type='text' name='name' onChange={handleRecipe} onBlur={passNameProps} className={nameIsEntered ? 'none' : ''} />
                                <AddRecipeName name={data.name} nameIsEntered={nameIsEntered} />
                            </Row>
                            <Row onClick={editDescriptionField} className='input-field'>
                                <textarea id='description' placeholder={recipeData ? recipeData.description : 'description'} type='text' name='description' onChange={handleRecipe} onBlur={passDescriptionProps} className={descriptionIsEntered ? 'none' : ''} />    
                                <AddRecipeDescription description={data.description} descriptionIsEntered={descriptionIsEntered} />
                            </Row>
                            <Row className='input-field'>
                                <ul>
                                {recipeIngredientsArr.map(ingredient => {
                                    return (
                                        <li>
                                            <RecipeFormIngredients id={ingredient.htmlId} value={ingredient} ingredients={recipeIngredientsArr} ingredients={ingredients} setIngredients={setIngredients} recipeIngredientsArr={recipeIngredientsArr} setRecipeIngredientsArr={setRecipeIngredientsArr} numRecipeIngredients={numRecipeIngredients} setNumRecipeIngredients={setNumRecipeIngredients} />
                                        </li>)
                                })}
                                </ul>
                                <Button xs={2} className='btn btn-primary' onClick={incrementRecipeIngredientsArr}>More Ingredients</Button>
                            </Row>
                            <Row className='input-field'>
                                <ol>
                                    {recipeInstructionsArr && recipeInstructionsArr.map(instructionId => {
                                        return(
                                            <li>
                                                <RecipeFormInstructions id={instructionId.htmlId} />
                                            </li>
                                        )
                                    })}
                                </ol>
                                <Button xs={2} className='btn btn-primary' onClick={incrementRecipeInstructionsArr}>More Instructions</Button>
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

export default RecipeForm;
