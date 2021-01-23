import React, { useState } from 'react';

import FormController from '../../controller/FormController.js';
import AddRecipeIngredients from '../formComponents/addRecipe/AddRecipeIngredients';

function CreateRecipeIngredients({id}) {
    const [ingredient, setIngredient] = useState('');
    const [ingredientIsEntered, setIngredientIsEntered] = useState(false);

    const enterIngredient = () => {
        setIngredientIsEntered(true);
        FormController.addRecipeIngredient(ingredient);
    };

    const editIngredient = () => {
        setIngredientIsEntered(false);
        FormController.removeRecipeIngredient(ingredient);
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
