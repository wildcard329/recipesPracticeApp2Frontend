import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Card, CardImg, Row, Col, FormControl, FormLabel } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';

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
    selectDeleteInstruction,
    selectCreateRecipe 
    } from '../../model/state/Selector.js';
import FormController from '../../controller/FormController.js';

function RecipeForm() {
    const history = useHistory();
    const user = useSelector(selectUser);
    const recipeData = useSelector(selectRecipeData);
    const { recipeId } = useParams();
    const newRecipe = useSelector(selectCreateRecipe);
    const ingredient = useSelector(selectIngredient);
    const deleteIngredient = useSelector(selectDeleteIngredient);
    const instruction = useSelector(selectInstruction);
    const deleteInstruction = useSelector(selectDeleteInstruction);
    // console.log('data: \n', recipeData);

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [imgPreview, setImgPreview] = useState('');
    const amountOfIngredients = recipeData?.ingredients?.length || 5;
    const amountOfInstructions = recipeData?.instructions?.length || 3;

    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [data, setData] = useState({
        name: recipeData?.name || null,
        description: recipeData?.description || null,
        type: recipeData?.type || null,
        author: user.id || StorageHelper.getUserId()
    });

    useEffect(async () => {    
        if (recipeId && !recipeData.id) {
            await RecipeController.getRecipeData(recipeId);
        };
    }, []);
    useEffect(async () => {
        if (newRecipe) {
            const refreshedIngredients = await FormHelper.convertArrToHtml(Array(amountOfIngredients).fill({}));
            const refreshedInstructions = await FormHelper.convertArrToHtml(Array(amountOfInstructions).fill({}));
            await setIngredients(refreshedIngredients);
            await setInstructions(refreshedInstructions);
        } else {
            const refreshedIngredients = await FormHelper.convertArrToHtml(recipeData.ingredients);
            const refreshedInstructions = await FormHelper.convertArrToHtml(recipeData.instructions);
            await setIngredients(refreshedIngredients);
            await setInstructions(refreshedInstructions);
        }
    }, [recipeData]);
    useEffect(() => {
        setIngredients(FormHelper.setListItem(ingredient, ingredients))
        setInstructions(FormHelper.setListItem(instruction, instructions))
    }, [ingredient, instruction])    
    useEffect(() => {
        setIngredients(FormHelper.removeListItem(deleteIngredient, ingredients))
        setInstructions(FormHelper.removeListItem(deleteInstruction, instructions))
    }, [deleteIngredient, deleteInstruction])

    const incrementRecipeIngredientsArr = async () => {
        ingredients?.push({});
        const updatedIngredients = await FormHelper.convertArrToHtml(ingredients);
        setIngredients(updatedIngredients);
    };
    const incrementRecipeInstructionsArr = async () => {
        instructions?.push({});
        const updatedInstructions = await FormHelper.convertArrToHtml(instructions);
        setInstructions(updatedInstructions);
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
        if (newRecipe) {
            FormController.relayCreateRecipe(false);
        } else {
            history.push('/recipes/browse');
        }
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
        // history.push('/recipes/browse');
        FormController.relayCreateRecipe(false);
    };
    return(
        <div className='create-recipe'>
            {recipeId ? <h2>Edit {recipeData.name}</h2> : <h2>Add New Recipe</h2>}
            <Form>
                <FormControl
                    id='name'
                    name='name'
                    placeholder={recipeId ? recipeData.name : 'recipe name'}
                    type='text'
                    onChange={handleRecipe}
                />
                <FormControl
                    id='type'
                    name='type'
                    placeholder={recipeId ? recipeData.type : 'category'}
                    type='text'
                    onChange={handleRecipe}
                />
                <FormControl
                    as='textarea'
                    id='description'
                    name='description'
                    placeholder={recipeId ? recipeData.description : 'recipe description'}
                    type='text'
                    onChange={handleRecipe}
                />
                {imgPreview ? 
                    <Form.Group as={Col}>
                        <Row>
                            <Card.Img className='recipe-data-image' src={imgPreview} /> 
                        </Row>
                        <Row>
                            <FormControl 
                                type='file' 
                                onChange={handleImage} 
                                className='image-input' 
                            />
                        </Row>
                    </Form.Group>
                : 
                <Form.Group as={Col}>
                    <Row>
                        {recipeId ? null : <h4>Select Image to Upload</h4>}
                        <CardImg className='recipe-data-image' src={recipeId ? `data:image/jpeg;base64,${recipeData.image}` : imageDefault} />
                    </Row>
                    <Row>
                        <FormControl 
                            type='file' 
                            onChange={handleImage} 
                            className='image-input' 
                        />
                    </Row>
                </Form.Group>}
                <Row>
                    <Col>
                        <FormLabel>Ingredients:</FormLabel>
                        <ul className='create-recipe-list'>
                                    {ingredients && ingredients.map(recipeIngredient => {
                                        return (
                                            <li key={recipeIngredient && recipeIngredient.htmlId}>
                                                <RecipeFormIngredients recipeIngredient={recipeIngredient} />
                                            </li>)
                                    })}
                        </ul>
                        <BsPlusSquare className='create-recipe-list-item-button' onClick={incrementRecipeIngredientsArr} />
                    </Col>
                    <Col xs={8}>
                        <FormLabel>Instructions:</FormLabel>
                        <ol className='create-recipe-list'>
                                        {instructions && instructions.map(recipeInstruction => {
                                            return(
                                                <li key={recipeInstruction && recipeInstruction.htmlId}>
                                                    <RecipeFormInstructions recipeInstruction={recipeInstruction} />
                                                </li>
                                            )
                                        })}
                        </ol>
                        <BsPlusSquare className='create-recipe-list-item-button' onClick={incrementRecipeInstructionsArr} />
                    </Col>
                </Row>
                <Form.Group as={Row} className='recipe-btn-group'>
                    <Button xs={2} variant='outline-dark' onClick={cancel}>Cancel</Button>
                    <Button xs={2} className='btn btn-primary' onClick={submitRecipe} disabled={data.name && 
                                                                                                data.description && 
                                                                                                data.type && 
                                                                                                file && 
                                                                                                ingredients.length > 2 && 
                                                                                                instructions.length > 1 
                                                                                                ? false : true}>Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default RecipeForm;