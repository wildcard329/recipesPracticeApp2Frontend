import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Card, CardImg, Row, Col } from 'react-bootstrap';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';
import { selectUser } from '../../model/state/Selector.js';
import imageDefault from '../../images_static/plate-utensils.jpeg';

function CreateRecipe() {
    const user = useSelector(selectUser);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [ingredients, setIngredients] = useState(null);
    const [instructions, setInstructions] = useState(null);
    const [imgPreview, setImgPreview] = useState('');
    const [tenIngredients, setTenIngredients] = useState(false);
    const [fifteenIngredients, setFifteenIngredients] = useState(false);
    const [fourSteps, setFourSteps] = useState(false);
    const [fiveSteps, setFiveSteps] = useState(false);
    const [data, setData] = useState({
        name: null,
        description: null,
        author: user.id
    })

    const needsMoreIngredients = () => {
        if (!tenIngredients) {
            setTenIngredients(true);
        } else if (tenIngredients && !fifteenIngredients) {
            setFifteenIngredients(true);
        }
    }

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

    const handleIngredients = e => {
        setIngredients({...ingredients, [e.target.name]: e.target.value});
    };

    const handleInstructions = e => {
        setInstructions({...instructions, [e.target.name]: e.target.value});
    };
    
    const handleRecipe = e => {
        setData({...data, [e.target.name]: e.target.value});
    }
    
    const cancel = e => {
        e.preventDefault();
        UserController.routeToDestination('browse');
    }
    
    const submitRecipe = async e => {
        e.preventDefault();
        const recipe = new FormData();
        recipe.append('name', data.name);
        recipe.append('description', data.description);
        recipe.append('ingredients', ingredients);
        recipe.append('instructions', instructions);
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
                            <Row>
                                {data.name ? <h3>{data.name}</h3> : null}
                                <input id='name' placeholder='recipe name' type='text' name='name' onChange={handleRecipe} />
                            </Row>
                            <Row>
                                {data.description ? <p>{data.description}</p> : null}
                                <textarea id='description' placeholder='description' type='text' name='description' onChange={handleRecipe} />    
                            </Row>
                            <Row>
                                <input id='ingredient1' placeholder='ingredient' type='text' name='ingredient1' onChange={handleIngredients} />
                                <input id='ingredient2' placeholder='ingredient' type='text' name='ingredient2' onChange={handleIngredients} />
                                <input id='ingredient3' placeholder='ingredient' type='text' name='ingredient3' onChange={handleIngredients} />
                                <input id='ingredient4' placeholder='ingredient' type='text' name='ingredient4' onChange={handleIngredients} />
                                <input id='ingredient5' placeholder='ingredient' type='text' name='ingredient5' onChange={handleIngredients} />
                                {tenIngredients && <input id='ingredient6' placeholder='ingredient' type='text' name='ingredient6' onChange={handleIngredients} />}
                                {tenIngredients && <input id='ingredient7' placeholder='ingredient' type='text' name='ingredient7' onChange={handleIngredients} />}
                                {tenIngredients && <input id='ingredient8' placeholder='ingredient' type='text' name='ingredient8' onChange={handleIngredients} />}
                                {tenIngredients && <input id='ingredient9' placeholder='ingredient' type='text' name='ingredient9' onChange={handleIngredients} />}
                                {tenIngredients && <input id='ingredient10' placeholder='ingredient' type='text' name='ingredient10' onChange={handleIngredients} />}
                                {fifteenIngredients && tenIngredients && <input id='ingredient11' placeholder='ingredient' type='text' name='ingredient11' onChange={handleIngredients} />}
                                {fifteenIngredients && tenIngredients && <input id='ingredient12' placeholder='ingredient' type='text' name='ingredient12' onChange={handleIngredients} />}
                                {fifteenIngredients && tenIngredients && <input id='ingredient13' placeholder='ingredient' type='text' name='ingredient13' onChange={handleIngredients} />}
                                {fifteenIngredients && tenIngredients && <input id='ingredient14' placeholder='ingredient' type='text' name='ingredient14' onChange={handleIngredients} />}
                                {fifteenIngredients && tenIngredients && <input id='ingredient15' placeholder='ingredient' type='text' name='ingredient15' onChange={handleIngredients} />}
                                {!fifteenIngredients && <Button className='recipe-btn-add-fields' onClick={needsMoreIngredients}>More Ingredients</Button>}
                            </Row>
                            <Row>
                                <textarea id='instructions1' placeholder='instructions' type='text' name='instructions1' onChange={handleInstructions} />
                                <textarea id='instructions2' placeholder='instructions' type='text' name='instructions2' onChange={handleInstructions} />
                                <textarea id='instructions3' placeholder='instructions' type='text' name='instructions3' onChange={handleInstructions} />
                                {fourSteps && <textarea id='instructions4' placeholder='instructions' type='text' name='instructions4' onChange={handleInstructions} />}
                                {fiveSteps && fourSteps && <textarea id='instructions5' placeholder='instructions' type='text' name='instructions5' onChange={handleInstructions} />}
                                {!fiveSteps && <Button className='recipe-btn-add-fields' onClick={needsMoreSteps}>Add Step</Button>}
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
