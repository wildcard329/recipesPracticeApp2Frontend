import React from 'react';
import { Button } from 'react-bootstrap';

import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import FormController from '../../controller/FormController.js';

function RecipeFormIngredients({recipeIngredient}) {
    console.log('ingredient: ',recipeIngredient);
  
    const handleIngredient = e => {
        const editedIngredient = FormHelper.editListItem(recipeIngredient, e.target.value)
        FormController.relayIngredient(editedIngredient);
    };

    const removeIngredient = () => {
        FormController.deleteIngredient(recipeIngredient);
    };

    return(
        <div>
            <input id={recipeIngredient && recipeIngredient.htmlId} name='name' placeholder={recipeIngredient && recipeIngredient.name ? recipeIngredient && recipeIngredient.name : 'ingredient quantity and name'} onChange={handleIngredient} className= 'create-recipe-item' />
            <Button className='btn btn-danger' onClick={removeIngredient}>X</Button>
        </div>
    )
}

export default RecipeFormIngredients;
