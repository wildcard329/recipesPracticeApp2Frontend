import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';

function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        author: 'test user1',
    })
    const history = useHistory();

    const [image, setImage] = useState('')
    const [imagename, setImagename] = useState('Select image')

    const handleRecipe = e => {
        setRecipe({...recipe, [e.target.name]: e.target.value});
    }

    const handleFile = e => {
        setImage(e.target.files[0]);
        setImagename(e.target.files[0].name);
        recipe.image = image
        recipe.imagename = imagename
    }

    const cancel = e => {
        e.preventDefault();
        history.push('/recipes/all');
    }

    const submitRecipe = e => {
        e.preventDefault();
        RecipeController.addRecipeData(recipe)
    }
    return(
        <div>
            <form onSubmit={submitRecipe}>
                <div>
                    <label htmlFor='name'>Recipe</label>
                    <input id='name' type='text' name='name' onChange={handleRecipe} />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description' type='text' name='description' onChange={handleRecipe} />
                </div>
                <div>
                    <label htmlFor='image'>Picture</label>
                    <input id='image' type='file' name='image' onChange={handleFile} />
                </div>
                <div>
                    <button onClick={cancel}>Cancel</button>
                    <button onClick={submitRecipe}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRecipe;
