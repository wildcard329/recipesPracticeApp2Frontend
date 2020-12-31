import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import { selectUser } from '../../model/state/Selector.js';
import RecipePreview from './RecipePreview.jsx';

function CreateRecipe() {
    const user = useSelector(selectUser)
    console.log(user.username)
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        author: user.id,
    })
    const history = useHistory();

    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Select image')

    const handleRecipe = e => {
        setRecipe({...recipe, [e.target.name]: e.target.value});
    }

    const handleFile = e => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setFile(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
        console.log('file: ',file);
    }
    
    const cancel = e => {
        e.preventDefault();
        history.push('/recipes/all');
    }
    
    const submitRecipe = e => {
        e.preventDefault();
        RecipeController.addRecipeData(recipe);
        RecipeController.getRecipeList();
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
            <image src ={file} />
            <RecipePreview recipe={recipe} file={file} filename={filename} />
        </div>
    )
}

export default CreateRecipe;
