import React from 'react';

function AuthError({errorMessage}) {
    return(
        <div>
            <h3>{errorMessage}</h3>
        </div>
    )
}

export default AuthError;
