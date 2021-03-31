import React from 'react';
import { BsX } from 'react-icons/bs';
import { FormControl } from 'react-bootstrap';

import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import FormController from '../../controller/FormController.js';

function RecipeFormInstructions({recipeInstruction}) {

    const handleInstruction = e => {
        const editedInstruction = FormHelper.editListItem(recipeInstruction, e.target.value)
        FormController.relayInstruction(editedInstruction)
    };
    
    const removeInstruction = () => {
        FormController.deleteInstruction(recipeInstruction)
    };

    return(
        <div className='form-list-item-wrapper'>
            <FormControl
                as='textarea' 
                id={recipeInstruction && recipeInstruction.htmlId} 
                name='name' 
                placeholder={recipeInstruction && recipeInstruction.name ? recipeInstruction && recipeInstruction.name : 'Enter instructions'} 
                onChange={handleInstruction} 
                className= 'create-recipe-item' 
            />
            <BsX className='delete-recipe-list-item create-recipe-list-item-button' onClick={removeInstruction} />
        </div>
    )
}

export default RecipeFormInstructions;
