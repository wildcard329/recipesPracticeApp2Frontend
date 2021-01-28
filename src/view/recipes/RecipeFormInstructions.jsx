import React, { useState } from 'react';

import AddRecipeInstructions from '../formComponents/addRecipe/AddRecipeInstructions.jsx';

function RecipeFormInstructions({id}) {
    const [instruction, setInstruction] = useState('');
    const [instructionIsEntered, setInstructionIsEntered] = useState(false);

    const enterInstruction = () => {
        setInstructionIsEntered(true);
    };

    const editInstruction = () => {
        setInstructionIsEntered(false);
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

export default RecipeFormInstructions;
