import React from 'react';

function AddRecipeInstructions({instruction, instructionIsEntered}) {
    return(
        <p className={instructionIsEntered ? 'create-recipe-item' : 'none'}>{instruction}</p>
    )
}

export default AddRecipeInstructions;
