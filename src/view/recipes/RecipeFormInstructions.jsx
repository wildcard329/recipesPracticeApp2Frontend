import React from 'react';

import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import { Button } from 'react-bootstrap';
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
        <div>
            <textarea id={recipeInstruction && recipeInstruction.htmlId} name='name' placeholder={recipeInstruction && recipeInstruction.name ? recipeInstruction && recipeInstruction.name : 'Enter instructions'} onChange={handleInstruction} className= 'create-recipe-item' />
            <Button className='btn btn-danger' onClick={removeInstruction}>x</Button>
        </div>
    )
}

export default RecipeFormInstructions;
