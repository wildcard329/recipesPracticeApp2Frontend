import React, { useState } from 'react';

import FormController from '../../controller/FormController.js';
import AddRecipeInstructions from '../formComponents/addRecipe/AddRecipeInstructions.jsx';

function CreateRecipeInstructions({id}) {
    const [instruction, setInstruction] = useState('');
    const [instructionIsEntered, setInstructionIsEntered] = useState(false);

    const enterInstruction = () => {
        setInstructionIsEntered(true);
        FormController.addRecipeInstruction(instruction);
    };

    const editInstruction = () => {
        setInstructionIsEntered(false);
        FormController.removeRecipeInstruction(instruction);
    };

    const handleInstruction = e => {
        setInstruction(e.target.value);
    };

    return(
        <div onClick={editInstruction}>
            <AddRecipeInstructions instruction={instruction} instructionIsEntered={instructionIsEntered} />
            <textarea id={id} name={id} onChange={handleInstruction} onBlur={enterInstruction} className={instructionIsEntered ? 'none' : 'create-recipe-item'} />
        </div>
    )
}

export default CreateRecipeInstructions;
