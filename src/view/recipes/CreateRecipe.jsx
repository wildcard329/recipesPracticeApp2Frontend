import React, { useState } from 'react';
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

function CreateRecipe() {
    const user = useSelector(selectUser);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [imgPreview, setImgPreview] = useState('');
    const [fourSteps, setFourSteps] = useState(false);
    const [fiveSteps, setFiveSteps] = useState(false);
    const [nameIsEntered, setNameIsEntered] = useState(false);
    const [descriptionIsEntered, setDescriptionIsEntered] = useState(false);
    const [data, setData] = useState({
        name: null,
        description: null,
        author: user.id
    })

    const needsMoreSteps = () => {
        if (!fourSteps) {
            setFourSteps(true);
        } else if (fourSteps && !fiveSteps) {
            setFiveSteps(true);
        }
    }

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
                            <Row onClick={editNameField}>
                                <input id='name' placeholder='recipe name' type='text' name='name' onChange={handleRecipe} onBlur={passNameProps} className={nameIsEntered ? 'none' : ''} />
                                <AddRecipeName name={data.name} nameIsEntered={nameIsEntered} />
                            </Row>
                            <Row onClick={editDescriptionField}>
                                <textarea id='description' placeholder='description' type='text' name='description' onChange={handleRecipe} onBlur={passDescriptionProps} className={descriptionIsEntered ? 'none' : ''} />    
                                <AddRecipeDescription description={data.description} descriptionIsEntered={descriptionIsEntered} />
                            </Row>
                            <Row>
                                <CreateRecipeIngredients />
                            </Row>
                            <Row>
                                <CreateRecipeInstructions />
                                {/* <textarea id='instructions1' placeholder='instructions' type='text' name='instructions1' onChange={handleRecipe} />
                                <textarea id='instructions2' placeholder='instructions' type='text' name='instructions2' onChange={handleRecipe} />
                                <textarea id='instructions3' placeholder='instructions' type='text' name='instructions3' onChange={handleRecipe} />
                                {fourSteps && <textarea id='instructions4' placeholder='instructions' type='text' name='instructions4' onChange={handleRecipe} />}
                                {fiveSteps && fourSteps && <textarea id='instructions5' placeholder='instructions' type='text' name='instructions5' onChange={handleRecipe} />}
                                {!fiveSteps && <Button className='recipe-btn-add-fields' onClick={needsMoreSteps}>More Steps</Button>} */}
                            </Row>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Row} className='recipe-btn-group'>
                        <Button xs={2} className='btn btn-primary' onClick={submitRecipe}>Submit</Button>
                        <Button xs={2} className='btn btn-secondary' onClick={cancel}>Cancel</Button>
                    </Form.Group>
                </Form>
            </form>
        </div>
    )
}

export default CreateRecipe;
