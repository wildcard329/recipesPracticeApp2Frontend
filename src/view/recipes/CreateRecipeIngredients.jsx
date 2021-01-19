import React, { useState } from 'react';
import { FormGroup, Button } from 'react-bootstrap';

import AddRecipeIngredients from '../formComponents/addRecipe/AddRecipeIngredients';

function CreateRecipeIngredients() {
    const [ingredient1IsEntered, setIngredient1IsEntered] = useState(false);
    const [ingredient2IsEntered, setIngredient2IsEntered] = useState(false);
    const [ingredient3IsEntered, setIngredient3IsEntered] = useState(false);
    const [ingredient4IsEntered, setIngredient4IsEntered] = useState(false);
    const [ingredient5IsEntered, setIngredient5IsEntered] = useState(false);
    const [ingredient6IsEntered, setIngredient6IsEntered] = useState(false);
    const [ingredient7IsEntered, setIngredient7IsEntered] = useState(false);
    const [ingredient8IsEntered, setIngredient8IsEntered] = useState(false);
    const [ingredient9IsEntered, setIngredient9IsEntered] = useState(false);
    const [ingredient10IsEntered, setIngredient10IsEntered] = useState(false);
    const [ingredient11IsEntered, setIngredient11IsEntered] = useState(false);
    const [ingredient12IsEntered, setIngredient12IsEntered] = useState(false);
    const [ingredient13IsEntered, setIngredient13IsEntered] = useState(false);
    const [ingredient14IsEntered, setIngredient14IsEntered] = useState(false);
    const [ingredient15IsEntered, setIngredient15IsEntered] = useState(false);
    const [tenIngredients, setTenIngredients] = useState(false);
    const [fifteenIngredients, setFifteenIngredients] = useState(false);
    const [ingredients, setIngredients] = useState({
        ingredient1: null,
        ingredient2: null,
        ingredient3: null,
        ingredient4: null,
        ingredient5: null,
        ingredient6: null,
        ingredient7: null,
        ingredient8: null,
        ingredient9: null,
        ingredient10: null,
        ingredient11: null,
        ingredient12: null,
        ingredient13: null,
        ingredient14: null,
        ingredient15: null
    });

    const sendIngredient1Props = () => {
        setIngredient1IsEntered(true);
    }

    const sendIngredient2Props = () => {
        setIngredient2IsEntered(true);
    }

    const sendIngredient3Props = () => {
        setIngredient3IsEntered(true);
    }

    const sendIngredient4Props = () => {
        setIngredient4IsEntered(true);
    }

    const sendIngredient5Props = () => {
        setIngredient5IsEntered(true);
    }

    const sendIngredient6Props = () => {
        setIngredient6IsEntered(true);
    }

    const sendIngredient7Props = () => {
        setIngredient7IsEntered(true);
    }

    const sendIngredient8Props = () => {
        setIngredient8IsEntered(true);
    }

    const sendIngredient9Props = () => {
        setIngredient9IsEntered(true);
    }

    const sendIngredient10Props = () => {
        setIngredient10IsEntered(true);
    }

    const sendIngredient11Props = () => {
        setIngredient11IsEntered(true);
    }

    const sendIngredient12Props = () => {
        setIngredient12IsEntered(true);
    }

    const sendIngredient13Props = () => {
        setIngredient13IsEntered(true);
    }

    const sendIngredient14Props = () => {
        setIngredient14IsEntered(true);
    }

    const sendIngredient15Props = () => {
        setIngredient15IsEntered(true);
    }

    const editIngredient1 = () => {
        setIngredient1IsEntered(false);
    }

    const editIngredient2 = () => {
        setIngredient2IsEntered(false);
    }

    const editIngredient3 = () => {
        setIngredient3IsEntered(false);
    }

    const editIngredient4 = () => {
        setIngredient4IsEntered(false);
    }

    const editIngredient5 = () => {
        setIngredient5IsEntered(false);
    }

    const editIngredient6 = () => {
        setIngredient6IsEntered(false);
    }

    const editIngredient7 = () => {
        setIngredient7IsEntered(false);
    }

    const editIngredient8 = () => {
        setIngredient8IsEntered(false);
    }

    const editIngredient9 = () => {
        setIngredient9IsEntered(false);
    }

    const editIngredient10 = () => {
        setIngredient10IsEntered(false);
    }

    const editIngredient11 = () => {
        setIngredient11IsEntered(false);
    }

    const editIngredient12 = () => {
        setIngredient12IsEntered(false);
    }

    const editIngredient13 = () => {
        setIngredient13IsEntered(false);
    }

    const editIngredient14 = () => {
        setIngredient14IsEntered(false);
    }

    const editIngredient15 = () => {
        setIngredient15IsEntered(false);
    }

    const extendIngredients = () => {
        if (!tenIngredients) {
            setTenIngredients(true);
        } else if (tenIngredients && !fifteenIngredients) {
            setFifteenIngredients(true);
        };
    };

    const handleIngredients = e => {
        setIngredients({...ingredients, [e.target.name]: e.target.value});
    };


    return(
        <div>
            <FormGroup>
                <ul>
                    <li onClick={editIngredient1}>
                        <input id='ingredient1' placeholder='ingredient' type='text' name='ingredient1' onChange={handleIngredients} onBlur={sendIngredient1Props} className={ingredient1IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient1} ingredientIsEntered={ingredient1IsEntered} />
                    </li>
                    <li onClick={editIngredient2}>
                        <input id='ingredient2' placeholder='ingredient' type='text' name='ingredient2' onChange={handleIngredients} onBlur={sendIngredient2Props} className={ingredient2IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient2} ingredientIsEntered={ingredient2IsEntered} />
                    </li>
                    <li onClick={editIngredient3}>
                        <input id='ingredient3' placeholder='ingredient' type='text' name='ingredient3' onChange={handleIngredients} onBlur={sendIngredient3Props} className={ingredient3IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient3} ingredientIsEntered={ingredient3IsEntered} />
                    </li>
                    <li onClick={editIngredient4}>
                        <input id='ingredient4' placeholder='ingredient' type='text' name='ingredient4' onChange={handleIngredients} onBlur={sendIngredient4Props} className={ingredient4IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient4} ingredientIsEntered={ingredient4IsEntered} />
                    </li>
                    <li onClick={editIngredient5}>
                        <input id='ingredient5' placeholder='ingredient' type='text' name='ingredient5' onChange={handleIngredients} onBlur={sendIngredient5Props} className={ingredient5IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient5} ingredientIsEntered={ingredient5IsEntered} />
                    </li>
                    {tenIngredients &&
                    <li onClick={editIngredient6}>
                        <input id='ingredient6' placeholder='ingredient' type='text' name='ingredient6' onChange={handleIngredients} onBlur={sendIngredient6Props} className={ingredient6IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient6} ingredientIsEntered={ingredient6IsEntered} />
                    </li>}
                    {tenIngredients &&
                    <li onClick={editIngredient7}>
                        <input id='ingredient7' placeholder='ingredient' type='text' name='ingredient7' onChange={handleIngredients} onBlur={sendIngredient7Props} className={ingredient7IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient7} ingredientIsEntered={ingredient7IsEntered} />
                    </li>}
                    {tenIngredients &&
                    <li onClick={editIngredient8}>
                        <input id='ingredient8' placeholder='ingredient' type='text' name='ingredient8' onChange={handleIngredients} onBlur={sendIngredient8Props} className={ingredient8IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient8} ingredientIsEntered={ingredient8IsEntered} />
                    </li>}
                    {tenIngredients && 
                    <li onClick={editIngredient9}>
                        <input id='ingredient9' placeholder='ingredient' type='text' name='ingredient9' onChange={handleIngredients} onBlur={sendIngredient9Props} className={ingredient9IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient9} ingredientIsEntered={ingredient9IsEntered} />
                    </li>}
                    {tenIngredients &&
                    <li onClick={editIngredient10}>
                        <input id='ingredient10' placeholder='ingredient' type='text' name='ingredient10' onChange={handleIngredients} onBlur={sendIngredient10Props} className={ingredient10IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient10} ingredientIsEntered={ingredient10IsEntered} />
                    </li>}
                    {tenIngredients && fifteenIngredients &&
                    <li onClick={editIngredient11}>
                        <input id='ingredient11' placeholder='ingredient' type='text' name='ingredient11' onChange={handleIngredients} onBlur={sendIngredient11Props} className={ingredient11IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient11} ingredientIsEntered={ingredient11IsEntered} />
                    </li>}
                    {tenIngredients && fifteenIngredients &&
                    <li onClick={editIngredient12}>
                        <input id='ingredient12' placeholder='ingredient' type='text' name='ingredient12' onChange={handleIngredients} onBlur={sendIngredient12Props} className={ingredient12IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient12} ingredientIsEntered={ingredient12IsEntered} />
                    </li>}
                    {tenIngredients && fifteenIngredients &&
                    <li onClick={editIngredient13}>
                        <input id='ingredient13' placeholder='ingredient' type='text' name='ingredient13' onChange={handleIngredients} onBlur={sendIngredient13Props} className={ingredient13IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient13} ingredientIsEntered={ingredient13IsEntered} />
                    </li>}
                    {tenIngredients && fifteenIngredients &&
                    <li onClick={editIngredient14}>
                        <input id='ingredient14' placeholder='ingredient' type='text' name='ingredient14' onChange={handleIngredients} onBlur={sendIngredient14Props} className={ingredient14IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient14} ingredientIsEntered={ingredient14IsEntered} />
                    </li>}
                    {tenIngredients && fifteenIngredients &&
                    <li onClick={editIngredient15}>
                        <input id='ingredient15' placeholder='ingredient' type='text' name='ingredient15' onChange={handleIngredients} onBlur={sendIngredient15Props} className={ingredient15IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeIngredients ingredient={ingredients.ingredient15} ingredientIsEntered={ingredient15IsEntered} />
                    </li>}
                </ul>
            </FormGroup>
            {!fifteenIngredients && <Button onClick={extendIngredients}>More Ingredients</Button>}
        </div>
    )
}

export default CreateRecipeIngredients;
