import React, { useState } from 'react';
import { FormGroup, Button } from 'react-bootstrap';

import AddRecipeIngredients from '../formComponents/addRecipe/AddRecipeIngredients';

function CreateRecipeIngredients({id}) {
    const [ingredient, setIngredient] = useState('');
    const [ingredientIsEntered, setIngredientIsEntered] = useState(false);

    const enterIngredient = () => {
        setIngredientIsEntered(true);
    };

    const editIngredient = () => {
        setIngredientIsEntered(false);
    };

    const handleIngredient = e => {
        setIngredient(e.target.value);
    };

    return(
        <div onClick={editIngredient}>
            <AddRecipeIngredients ingredient={ingredient} ingredientIsEntered={ingredientIsEntered} />
            <input id={id} name={id} onChange={handleIngredient} onBlur={enterIngredient} className={ingredientIsEntered ? 'none' : 'create-recipe-item'} />
        </div>
    )
}

export default CreateRecipeIngredients;
