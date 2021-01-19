import React from 'react';

function AddRecipeName({name, nameIsEntered}) {
    return(
        <h2 className={nameIsEntered ? '' : 'none'}>{name}</h2>
    )
}

export default AddRecipeName;
