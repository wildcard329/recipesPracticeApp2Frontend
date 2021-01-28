import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import FormController from '../../controller/FormController.js';
import AddRecipeIngredients from '../formComponents/addRecipe/AddRecipeIngredients';
import FormHelper from '../../helpers/functions/formFunctionHandler.js';

function RecipeFormIngredients({id, value, setIngredients, ingredients, recipeIngredientsArr, setRecipeIngredientsArr, numRecipeIngredients, setNumRecipeIngredients}) {
    const [ingredientIsEntered, setIngredientIsEntered] = useState(false);
    const [ingredient, setIngredient] = useState({
        htmlId: id,
        name: value.value || ''
    });

    // useEffect(() => {
    //     setNumRecipeIngredients(recipeIngredientsArr.length);
    // }, [recipeIngredientsArr])

    const enterIngredient = () => {
        setIngredientIsEntered(true);
        setIngredients([...ingredients, ingredient]);
        FormController.addRecipeIngredient(ingredient);
    };

    const editIngredient = () => {
        setIngredientIsEntered(false);
        setIngredients(FormHelper.filterListItem(ingredient, ingredients))
        // FormController.removeRecipeIngredient(ingredient);
    };

    const removeIngredient = () => {
        setIngredients(FormHelper.filterListItem(ingredient, ingredients));
        setRecipeIngredientsArr(FormHelper.removeListItem(ingredient, recipeIngredientsArr))
        console.log('array: ',recipeIngredientsArr)
        // FormController.removeRecipeIngredientId(id);
    };

    const handleIngredient = e => {
        setIngredient({...ingredient, [e.target.name]: e.target.value});
    };

    return(
        <div onClick={editIngredient}>
            <AddRecipeIngredients ingredient={ingredient.value} ingredientIsEntered={ingredientIsEntered} />
            <input id={id} name='name' placeholder={ingredient ? ingredient.value : 'ingredient quantity and name'} onChange={handleIngredient} onBlur={enterIngredient} className={ingredientIsEntered ? 'none' : 'create-recipe-item'} />
            <Button className='btn btn-danger' onClick={removeIngredient}>X</Button>
        </div>
    )
}

export default RecipeFormIngredients;
