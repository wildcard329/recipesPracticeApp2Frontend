import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RecipeController from '../../controller/RecipeController.js';
import UserController from "../../controller/UserController.js";
import { selectSampleRecipes } from '../../model/state/Selector.js';
import UserHelper from '../../helpers/functions/storageHandler.js';

import RecipeMapper from "./RecipeMapper.jsx";

function RecipeList() {
    const history = useHistory();
    const userId = UserHelper.getUserId();
    const samples = useSelector(selectSampleRecipes);
    const filters = samples && samples[0];
    const recipes = samples && samples[1];
    const userRecipes = samples && samples[2];
    const filter1 = samples && samples[3];
    const filter2 = samples && samples[4];
    const filter3 = samples && samples[5];
   
    const setUserRecipes = () => {
        UserController.getUserData(userId);
    };
    
    const toAllRecipes = () => {
        history.push('/recipes/all');
    }
    
    const toRecipeList = () => {
        history.push('/recipes/user');
    }
    
    useEffect(async () => {
        await RecipeController.browseRecipes(userId);
    }, [userId]);

    return(
        <div>
            <div className='recipe-lists'>
                <h2 className='list-header' onClick={toAllRecipes}>Browse all recipes</h2>
                <RecipeMapper recipes={recipes} />
            </div>
            <div className='recipe-lists' onClick={setUserRecipes}>
                <h2 className='list-header' onClick={toRecipeList}>Your Recipes</h2>
                <RecipeMapper recipes={userRecipes} />
            </div>
            <div className='recipe-lists' onClick={null}>
                <h2 className='list-header' onClick={null}>Try {filters && filters[0]} Recipes</h2>
                <RecipeMapper recipes={filter1} />
            </div>
            <div className='recipe-lists' onClick={null}>
                <h2 className='list-header' onClick={null}>Try {filters && filters[1]} Recipes</h2>
                <RecipeMapper recipes={filter2} />
            </div>
            <div className='recipe-lists' onClick={null}>
                <h2 className='list-header' onClick={null}>Try {filters && filters[2]} Recipes</h2>
                <RecipeMapper recipes={filter3} />
            </div>
        </div>
    )
}

export default RecipeList;
