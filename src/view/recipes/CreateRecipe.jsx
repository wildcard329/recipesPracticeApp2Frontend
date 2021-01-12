import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, CardImg, Card } from 'react-bootstrap';

import UserController from '../../controller/UserController.js';
import RecipeController from '../../controller/RecipeController.js';
import { selectUser } from '../../model/state/Selector.js';
import imageDefault from '../../images_static/plate-utensils.jpeg';

function CreateRecipe() {
    const user = useSelector(selectUser);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [data, setData] = useState({
        name: '',
        description: '',
        author: user.id
    })

    const handleImage = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    
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
        recipe.append('author',data.author);
        recipe.append('file', file);
        recipe.append('filename', filename);
        console.log(recipe)
        await RecipeController.addRecipeData(recipe);
        await RecipeController.getRecipeList();
        await RecipeController.getUserRecipeList(user.id);
        UserController.routeToDestination('browse');
    };
    return(
        <div className='create-recipe'>
            <h2>Add New Recipe</h2>
            <form className='recipe-form' onSubmit={submitRecipe}>
                {file ? <Card.Img src={file} /> : <Card.Img src={imageDefault} />}
                <Form>
                    <Form.Group controlId='name'>
                        <input id='name' placeholder='name' type='text' name='name' onChange={handleRecipe} />    
                    </Form.Group>
                    <Form.Group>
                        <input id='description' placeholder='description' type='text' name='description' onChange={handleRecipe} />    
                    </Form.Group>
                    <Form.Group>
                        <input type='file' src={imageDefault} onChange={handleImage} />    
                    </Form.Group>
                    <Form.Group className='recipe-btn-group'>
                        <Button className='btn btn-primary' onClick={submitRecipe}>Submit</Button>
                        <Button className='btn btn-secondary' onClick={cancel}>Cancel</Button>
                    </Form.Group>
                </Form>
            </form>
        </div>
    )
}

export default CreateRecipe;
