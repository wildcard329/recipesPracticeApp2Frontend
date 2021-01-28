import React, { useState } from 'react';

import AddRecipeInstructions from '../formComponents/addRecipe/AddRecipeInstructions.jsx';
import FormHelper from '../../helpers/functions/formFunctionHandler.js';
import { Button } from 'react-bootstrap';

function RecipeFormInstructions({id, name, setInstructions, instructions}) {
    const [instructionIsEntered, setInstructionIsEntered] = useState(false);
    const [instruction, setInstruction] = useState({
        htmlId: id,
        name: name || ''
    });

    const enterInstruction = () => {
        setInstructionIsEntered(true);
        setInstructions(FormHelper.setListItem(instruction, instructions));
    };

    const editInstruction = () => {
        setInstructionIsEntered(false);
    };

    const removeInstruction = () => {
        setInstructions(FormHelper.removeListItem(instruction, instructions));
    };

    const handleInstruction = e => {
        setInstruction({...instruction, [e.target.name]: e.target.value});
    };

    return(
        <div onClick={editInstruction}>
            <AddRecipeInstructions instruction={instruction.name} instructionIsEntered={instructionIsEntered} />
            <textarea id={id} name='name' placeholder={instruction.name ? instruction.name : 'Enter instructions'} onChange={handleInstruction} onBlur={enterInstruction} className={instructionIsEntered ? 'none' : 'create-recipe-item'} />
            <Button className='btn btn-danger' onClick={removeInstruction}>x</Button>
        </div>
    )
}

export default RecipeFormInstructions;
