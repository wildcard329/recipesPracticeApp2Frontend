import React from 'react';

function AddRecipeDescription({description, descriptionIsEntered}) {
    return(
        <p className={descriptionIsEntered ? '' : 'none'}>{description}</p>
    )
}

export default AddRecipeDescription;
