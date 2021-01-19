import React from 'react';

function AddRecipeInstructions({instruction, instructionIsEntered}) {
    return(
        <p className={instructionIsEntered ? '' : 'none'}>{instruction}</p>
    )
}

export default AddRecipeInstructions;
