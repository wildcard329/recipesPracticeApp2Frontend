import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import AddRecipeIngredients from '../formComponents/addRecipe/AddRecipeIngredients';
import FormHelper from '../../helpers/functions/formFunctionHandler.js';

function RecipeFormIngredients({id, name, setIngredients, ingredients}) {
    const [ingredientIsEntered, setIngredientIsEntered] = useState(false);
    const [ingredient, setIngredient] = useState({
        htmlId: id,
        name: name || ''
    });

    const enterIngredient = () => {
        setIngredientIsEntered(true);
        setIngredients(FormHelper.setListItem(ingredient, ingredients));
    };

    const editIngredient = () => {
        setIngredientIsEntered(false);
    };

    const removeIngredient = () => {
        setIngredients(FormHelper.removeListItem(ingredient, ingredients));
    };

    const handleIngredient = e => {
        setIngredient({...ingredient, [e.target.name]: e.target.value});
    };

    return(
        <div onClick={editIngredient}>
            <AddRecipeIngredients ingredient={ingredient.name} ingredientIsEntered={ingredientIsEntered} />
            <input id={id} name='name' placeholder={ingredient.name ? ingredient.name : 'ingredient quantity and name'} onChange={handleIngredient} onBlur={enterIngredient} className={ingredientIsEntered ? 'none' : 'create-recipe-item'} />
            <Button className='btn btn-danger' onClick={removeIngredient}>X</Button>
        </div>
    )
}

export default RecipeFormIngredients;
