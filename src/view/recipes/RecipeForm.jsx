import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Card, CardImg, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import RecipeFormIngredients from './RecipeFormIngredients.jsx';
import RecipeFormInstructions from './RecipeFormInstructions.jsx';

import RecipeController from '../../controller/RecipeController.js';
import imageDefault from '../../images_static/plate-utensils.jpeg';
import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import StorageHelper from '../../helpers/functions/storageHandler.js';
import { 
    selectUser, 
    selectRecipeData, 
    selectIngredient,
    selectDeleteIngredient,
    selectInstruction,
    selectDeleteInstruction 
    } from '../../model/state/Selector.js';

function RecipeForm() {
    const history = useHistory();
    const user = useSelector(selectUser);
    const recipeData = useSelector(selectRecipeData);
    const { recipeId } = useParams();
    const ingredient = useSelector(selectIngredient);
    const deleteIngredient = useSelector(selectDeleteIngredient);
    const instruction = useSelector(selectInstruction);
    const deleteInstruction = useSelector(selectDeleteInstruction);

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [imgPreview, setImgPreview] = useState('');
    const amountOfIngredients = recipeData.ingredients?.length || 5;
    const amountOfInstructions = recipeData.instructions?.length || 3;
    const [ingredients, setIngredients] = useState(FormHelper.convertArrToHtml(recipeId ? recipeData.ingredients || StorageHelper.retrieveIngredients() : Array(amountOfIngredients).fill({})));
    const [instructions, setInstructions] = useState(FormHelper.convertArrToHtml(recipeId ? recipeData.instructions || StorageHelper.retrieveInstructions() : Array(amountOfInstructions).fill({})));
    const [data, setData] = useState({
        name: recipeData.name || StorageHelper.retrieveName() || null,
        description: recipeData.description || StorageHelper.retrieveDescription() || null,
        type: recipeData.type || StorageHelper.retrieveType() || null,
        author: user.id || StorageHelper.getUserId()
    });
    // console.log(StorageHelper.packStorageList(recipeData.ingredients))
    console.log(StorageHelper.retrieveIngredients())

    useEffect(async () => {
        if (recipeId) {
            StorageHelper.storeRecipe(recipeData);
        };
        if (recipeId && !recipeData.id) {
            await RecipeController.getRecipeData(recipeId);
        };
    }, []);
    useEffect(() => {
        setIngredients(FormHelper.setListItem(ingredient, ingredients))
        setInstructions(FormHelper.setListItem(instruction, instructions))
    }, [ingredient, instruction])    
    useEffect(() => {
        setIngredients(FormHelper.removeListItem(deleteIngredient, ingredients))
        setInstructions(FormHelper.removeListItem(deleteInstruction, instructions))
    }, [deleteIngredient, deleteInstruction])

    const incrementRecipeIngredientsArr = () => {
        ingredients?.push({});
        setIngredients(FormHelper.convertArrToHtml(ingredients))
    };
    const incrementRecipeInstructionsArr = () => {
        instructions?.push({});
        setInstructions(FormHelper.convertArrToHtml(instructions))
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
    
    const cancel = e => {
        e.preventDefault();
        history.push('/recipes/browse');
    };
    
    const submitRecipe = async e => {
        e.preventDefault();
        const id = recipeId;
        const recipe = new FormData();
        recipe.append('name', data.name);
        recipe.append('type', data.type);
        recipe.append('description', data.description);
        recipe.append('author',data.author);
        recipe.append('file', file);
        recipe.append('filename', filename);
        ingredients.forEach(ingredient => {
            const ingredientName = ingredient.name
            recipe.append('ingredients', ingredientName);
        });
        instructions.forEach(instruction => {
            const instructionName = instruction.name;
            recipe.append('instructions', instructionName);
        });
        {recipeId ? 
            await RecipeController.editRecipeData({recipe, ingredients, instructions}, id) 
            : 
            await RecipeController.addRecipeData({recipe, ingredients, instructions})
        };
        history.push('/recipes/browse');
    };
    return(
        <div className='create-recipe'>
            {recipeId ? <h2>Edit {recipeData.name}</h2> : <h2>Add New Recipe</h2>}
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
                            {recipeId ? null : <h4>Select Image to Upload</h4>}
                            <CardImg src={recipeId ? `data:image/jpeg;base64,${recipeData.image}` : imageDefault} />
                        </Row>
                        <Row>
                            <input type='file' onChange={handleImage} className='image-input' />
                        </Row>
                    </Form.Group>}
                    <Form.Group controlId='name' as={Col}>
                        <Row className='input-field'>
                            <input id='name' placeholder={recipeId ? recipeData.name : 'recipe name'} type='text' name='name' onChange={handleRecipe} />
                        </Row>
                        <Row className='input-field'>
                            <input id='type' placeholder={recipeId ? recipeData.type : 'recipe type'} type='text' name='type' onChange={handleRecipe} />
                        </Row>
                        <Row className='input-field'>
                            <textarea id='description' placeholder={recipeId ? recipeData.description : 'description'} type='text' name='description' onChange={handleRecipe} />    
                        </Row>
                        <Row className='input-field'>
                            <ul>
                            {ingredients && ingredients.map(recipeIngredient => {
                                return (
                                    <li key={recipeIngredient && recipeIngredient.htmlId}>
                                        <RecipeFormIngredients recipeIngredient={recipeIngredient} />
                                    </li>)
                            })}
                            </ul>
                            <Button xs={2} className='btn btn-primary' onClick={incrementRecipeIngredientsArr}>More Ingredients</Button>
                        </Row>
                        <Row className='input-field'>
                            <ol>
                                {instructions && instructions.map(recipeInstruction => {
                                    return(
                                        <li key={recipeInstruction && recipeInstruction.htmlId}>
                                            <RecipeFormInstructions recipeInstruction={recipeInstruction} />
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
        </div>
    )
}

export default RecipeForm;
