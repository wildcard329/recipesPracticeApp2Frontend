import React from 'react';

function  RecipePreview(props) {

    return(
        <div>
            <h1>Preview</h1>
            <image src={'/na.jpeg'} alt='image-not-available' style={{width: '500px'}} />
            <h2>{props.recipe.name}</h2>
            <p>{props.recipe.author}</p>
        </div>
    )
}

export default RecipePreview;
