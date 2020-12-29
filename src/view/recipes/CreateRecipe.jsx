import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import RecipePreview from './RecipePreview.jsx';

function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        author: 'test user1',
    })
    const history = useHistory();

    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Select image')
    const [image, setImage] = useState(null)
    const [imgData, setImgData] = useState(null)

    const handleRecipe = e => {
        setRecipe({...recipe, [e.target.name]: e.target.value});
    }

    const onChangeImage = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0])
        }
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
        const data = new FormData();
        data.append('name', recipe.name);
        data.append('description', recipe.description);
        data.append('author', recipe.author)
        data.append('filename', filename);
        data.append('file', file);
        e.preventDefault();
        console.log('Sending :',data)
        RecipeController.addRecipeData(data)
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
