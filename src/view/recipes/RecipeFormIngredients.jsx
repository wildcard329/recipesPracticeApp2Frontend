import React from 'react';
import { BsX } from 'react-icons/bs';

import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import FormController from '../../controller/FormController.js';
import { FormControl } from 'react-bootstrap';

function RecipeFormIngredients({recipeIngredient}) {
    
    const handleIngredient = e => {
        const editedIngredient = FormHelper.editListItem(recipeIngredient, e.target.value)
        FormController.relayIngredient(editedIngredient);
    };

    const removeIngredient = () => {
        FormController.deleteIngredient(recipeIngredient);
    };

    return(
        <div className='form-list-item-wrapper'>
            <FormControl 
                id={recipeIngredient && recipeIngredient.htmlId} 
                name='name' 
                placeholder={recipeIngredient && recipeIngredient.name ? recipeIngredient && recipeIngredient.name : 'ingredient quantity and name'} 
                onChange={handleIngredient} 
                className= 'create-recipe-item' 
            />
            <BsX className='delete-recipe-list-item create-recipe-list-item-button' onClick={removeIngredient} />
        </div>
    )
}

export default RecipeFormIngredients;
